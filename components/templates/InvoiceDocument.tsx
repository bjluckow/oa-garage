import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
} from '@react-pdf/renderer';
import type { Listing } from '@/lib/client';

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 10,
        fontFamily: 'Helvetica',
        color: '#18181b',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Helvetica-Bold',
    },
    subtitle: {
        fontSize: 10,
        color: '#71717a',
        marginTop: 4,
    },
    badge: {
        fontSize: 9,
        color: '#16a34a',
        backgroundColor: '#f0fdf4',
        padding: '4 8',
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#e4e4e7',
        marginVertical: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 6,
    },
    label: {
        color: '#71717a',
    },
    value: {
        fontFamily: 'Helvetica-Bold',
    },
    price: {
        fontSize: 24,
        fontFamily: 'Helvetica-Bold',
        marginTop: 16,
    },
    description: {
        lineHeight: 1.6,
        color: '#3f3f46',
        marginTop: 8,
    },
    image: {
        width: '100%',
        height: 220,
        objectFit: 'cover',
        borderRadius: 6,
        marginBottom: 16,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 8,
        color: '#18181b',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        fontSize: 8,
        color: '#a1a1aa',
        textAlign: 'center',
    },
});

function formatCurrency(amount: number) {
    return `$${amount.toLocaleString('en-US')}`;
}

export function InvoiceDocument({ listing }: { listing: Listing }) {
    const invoiceDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Invoice</Text>
                        <Text style={styles.subtitle}>
                            Garage · withgarage.com
                        </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.subtitle}>Date: {invoiceDate}</Text>
                        <Text style={styles.subtitle}>
                            Listing #{listing.id.slice(0, 8)}
                        </Text>
                    </View>
                </View>

                {/* Truck image */}
                {listing.imageUrls[0] && (
                    <Image src={listing.imageUrls[0]} style={styles.image} />
                )}

                {/* Title + category */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        {listing.listingTitle}
                    </Text>
                    <Text style={styles.badge}>{listing.category.name}</Text>
                </View>

                <View style={styles.divider} />

                {/* Specs */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Details</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Year</Text>
                        <Text style={styles.value}>{listing.itemAge}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Brand</Text>
                        <Text style={styles.value}>{listing.itemBrand}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Location</Text>
                        <Text style={styles.value}>
                            {listing.address.state}
                        </Text>
                    </View>
                    {listing.itemWeight && (
                        <View style={styles.row}>
                            <Text style={styles.label}>Weight</Text>
                            <Text style={styles.value}>
                                {listing.itemWeight.toLocaleString()} lbs
                            </Text>
                        </View>
                    )}
                </View>

                <View style={styles.divider} />

                {/* Description */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>
                        {listing.listingDescription}
                    </Text>
                </View>

                <View style={styles.divider} />

                {/* Price */}
                <Text style={styles.price}>
                    {formatCurrency(listing.sellingPrice)}
                </Text>

                {/* Footer */}
                <Text style={styles.footer}>
                    Generated by Garage · This is not a binding purchase
                    agreement
                </Text>
            </Page>
        </Document>
    );
}
