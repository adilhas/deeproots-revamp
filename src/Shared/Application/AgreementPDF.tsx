import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.6,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
  },
});

interface AgreementPDFProps {
  fullName: string;
  createdAt: string;
  signatureURL?: string;
}

export const AgreementPDF: React.FC<AgreementPDFProps> = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Non-Disclosure Agreement & SAFT</Text>

      <View style={styles.section}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi
          consectetur tempore voluptates iusto. Deleniti laudantium veritatis
          voluptatum reprehenderit expedita, reiciendis quaerat vel vero
          sapiente, mollitia officia facilis cupiditate delectus quas dolorum,
          culpa exercitationem voluptate nobis fugiat ullam. Veritatis aliquam
          velit eius perferendis sed non nulla ratione exercitationem reiciendis
          in.
        </Text>
      </View>

      <View style={styles.section}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi
          consectetur tempore voluptates iusto. Deleniti laudantium veritatis
          voluptatum reprehenderit expedita, reiciendis quaerat vel vero
          sapiente, mollitia officia facilis cupiditate delectus quas dolorum,
          culpa exercitationem voluptate nobis fugiat ullam. Veritatis aliquam
          velit eius perferendis sed non nulla ratione exercitationem reiciendis
          in.
        </Text>
      </View>

      <View style={styles.section}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi
          consectetur tempore voluptates iusto. Deleniti laudantium veritatis
          voluptatum reprehenderit expedita, reiciendis quaerat vel vero
          sapiente, mollitia officia facilis cupiditate delectus quas dolorum,
          culpa exercitationem voluptate nobis fugiat ullam. Veritatis aliquam
          velit eius perferendis sed non nulla ratione exercitationem reiciendis
          in.
        </Text>
      </View>
    </Page>
  </Document>
);
