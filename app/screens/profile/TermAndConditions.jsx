// TermsAndConditions.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../Utils/Colors';

const TermsAndConditions = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Terms and Conditions</Text>

        {/* Section 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Penerimaan Ketentuan Penggunaan</Text>
          <Text style={styles.sectionContent}>
            Dengan mengakses atau menggunakan layanan ini, Anda menyetujui dan tunduk pada semua ketentuan dan kondisi yang tercantum di sini. Jika Anda tidak setuju dengan salah satu ketentuan ini, Anda tidak boleh menggunakan atau mengakses layanan ini.
          </Text>
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Penggunaan Layanan</Text>
          <Text style={styles.sectionContent}>
            a. Anda setuju untuk menggunakan layanan ini hanya untuk tujuan yang sah dan sesuai dengan semua undang-undang yang berlaku.
            {'\n'}b. Anda bertanggung jawab penuh atas segala aktivitas yang terjadi di akun Anda dan setuju untuk menjaga kerahasiaan kata sandi akun Anda.
          </Text>
        </View>

        {/* Section 3 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Ketentuan Perubahan</Text>
          <Text style={styles.sectionContent}>
            Pemilik layanan berhak untuk mengubah, memodifikasi, atau menghentikan layanan, atau bagian dari layanan, kapan saja dan tanpa pemberitahuan sebelumnya.
          </Text>
        </View>

        {/* Section 4 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Privasi dan Keamanan</Text>
          <Text style={styles.sectionContent}>
            a. Kami berkomitmen untuk melindungi privasi Anda. Informasi pribadi yang Anda berikan akan diatur oleh kebijakan privasi kami.
            {'\n'}b. Anda bertanggung jawab untuk menjaga keamanan informasi pribadi Anda dan memberikan informasi yang benar dan terkini.
          </Text>
        </View>

        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Pembatasan Tanggung Jawab</Text>
          <Text style={styles.sectionContent}>
            a. Layanan ini disediakan "apa adanya" tanpa jaminan apapun.
            {'\n'}b. Kami tidak bertanggung jawab atas kerugian atau kerusakan apa pun yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan ini.
          </Text>
        </View>

        {/* Section 6 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Hak Kekayaan Intelektual</Text>
          <Text style={styles.sectionContent}>
            a. Hak cipta dan hak kekayaan intelektual lainnya atas semua materi dan konten yang disediakan tetap menjadi milik pemilik layanan.
            {'\n'}b. Anda tidak diperkenankan untuk mereproduksi, mendistribusikan, atau menggunakan materi atau konten tanpa izin tertulis.
          </Text>
        </View>

        {/* Section 7 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Penutupan Akun</Text>
          <Text style={styles.sectionContent}>
            Pemilik layanan berhak untuk menutup akun pengguna kapan saja dengan atau tanpa pemberitahuan dan tanpa memberikan alasan.
          </Text>
        </View>

        {/* Section 8 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Hukum yang Berlaku</Text>
          <Text style={styles.sectionContent}>
            Ketentuan dan kondisi ini diatur oleh hukum yang berlaku di wilayah tempat pemilik layanan beroperasi.
          </Text>
        </View>

        {/* Section 9 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Pertanyaan dan Kontak</Text>
          <Text style={styles.sectionContent}>
            Jika Anda memiliki pertanyaan tentang ketentuan dan kondisi ini, silakan hubungi kami di [kontak@contohlayanan.com].
          </Text>
        </View>

        <Text style={styles.thankYou}>Terima kasih telah membaca dan memahami "Terms and Conditions" kami.</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:Colors.PRIMARY,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
  thankYou: {
    marginTop: 16,
    fontStyle: 'italic',
  },
});

export default TermsAndConditions;
