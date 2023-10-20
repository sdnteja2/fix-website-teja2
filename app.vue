<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
  useSchemaOrg([
    defineOrganization({
      name: "SDN Teja 2",
      url: "https://sdnteja2.sch.id/",
      logo: "https://sdnteja2.sch.id/sdnteja2.png",
      description:
        "Sekolah Dasar Negeri Teja 2 atau Teja II adalah sekolah dasar negeri yang berada di Desa Teja, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawabarat, Indonesia. Sekolah ini berdiri sejak tahun 1960.",
    }),
    defineLocalBusiness({
      name: "SDN Teja 2",
      address: {
        streetAddress:
          "Blok Desa, Desa Teja, Kecamatan Rajagaluh, Kabupaten Majalengka, Jawabarat, Indonesia",
        addressLocality: "Rajagaluh",
        addressRegion: "Majalengka - Jawa Barat",
        postalCode: "45472",
        addressCountry: "ID",
      },
      // image: 'https://emojiguide.org/images/emoji/n/3ep4zx1jztp0n.png',
    }),
  ]);
</script>
