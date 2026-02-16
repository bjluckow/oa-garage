import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResolvedAttribute } from '@/lib/resolve-attributes';

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 8,
        color: '#18181b',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cell: {
        width: '50%',
        paddingVertical: 4,
        paddingRight: 12,
    },
    label: {
        fontSize: 9,
        color: '#71717a',
    },
    value: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#18181b',
        marginTop: 1,
    },
});

function formatValue(attr: ResolvedAttribute): string {
    if (attr.inputType === 'BOOLEAN') {
        return attr.value === 'true' ? 'Yes' : 'No';
    }
    return attr.value;
}

export function SpecsSection({
    attributes,
}: {
    attributes: ResolvedAttribute[];
}) {
    if (attributes.length === 0) return null;

    return (
        <View style={styles.section}>
            <Text style={styles.title}>Specifications</Text>
            <View style={styles.grid}>
                {attributes.map((attr) => (
                    <View key={attr.label} style={styles.cell}>
                        <Text style={styles.label}>{attr.label}</Text>
                        <Text style={styles.value}>{formatValue(attr)}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
