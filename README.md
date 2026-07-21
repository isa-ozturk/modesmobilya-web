# Modes Mobilya — Kurumsal Web Sitesi

Bu repo, Modes Mobilya için hazırladığım kurumsal web sitesini ve bu sitenin arkasındaki tasarım sistemini içeriyor. Villa, ofis, fabrika ve konut projelerinde mobilya imalatından inşaata, mermerden elektrik/sıhhi tesisata kadar dokuz farklı hizmet branşını tek çatı altında anlatan, çok sayfalı bir kurumsal site.

Statik HTML + React (CDN üzerinden, derleme/build adımı yok) ile yazıldı. Herhangi bir Node.js kurulumu ya da paket yöneticisi gerekmiyor — dosyaları klonlayıp doğrudan bir tarayıcıda ya da basit bir statik sunucuda açman yeterli.

## Sitede neler var

- **Anasayfa** (`ui_kits/website/index.html`) — hero, hakkımızda özeti, dört mimari odak alanı (villa/ofis/fabrika/ev), mutfak vitrini, öne çıkan projeler ve iletişim çağrısı.
- **Hakkımızda** (`hakkimizda.html`) — şirket hikayesi ve ekip tanıtımı.
- **Hizmetlerimiz** (`hizmetler.html`) — dokuz branşın (mobilya imalatı, inşaat, mermer, elektrik tesisatı, sıhhi tesisat, mekanik, boya, zemin döşeme, merdiven tasarımı) her biri kendi görseli ve açıklamasıyla.
- **Projelerimiz** (`projeler.html`) — kategoriye göre filtrelenebilen tamamlanmış proje galerisi.
- **Blog** (`blog.html` + 6 yazı) — villa, ofis, mermer, fabrika ve mutfak konularında SEO'ya uygun içerik üretilmiş örnek yazılar.
- **İletişim** (`iletisim.html`) — genel iletişim formu, gömülü Google Haritalar konumu ve iletişim bilgileri.

Tüm sayfalarda ortak bir üst menü, WhatsApp'a hızlı erişim butonu ve her CTA butonunda açılan "Projenizi Konuşalım" adında kısa bir teklif formu var.

## Tasarım sistemi

Sitenin tüm bileşenleri (`Button`, `Input`, `Select`, `Card`, `Navbar`, `Footer`, `Dialog` vb.) proje kökündeki tasarım sisteminden geliyor: renk paleti, tipografi, boşluk ve gölge token'ları `tokens/` klasöründe, bileşenler `components/` altında. Bu sayede tüm sayfalarda tutarlı bir görsel dil kullanılıyor. Tasarım sisteminin canlı örnekleri için proje kökündeki `readme.md` dosyasına bakabilirsin.

## Nasıl çalıştırılır

Build adımı yok. En kolay yol:

```bash
npx serve .
```

ya da tercih ettiğin herhangi bir statik dosya sunucusuyla proje kökünü serve edip `ui_kits/website/index.html` adresine gitmen yeterli. Doğrudan dosya olarak da (`file://`) açılabilir ama form gönderimi ve bazı script'ler için bir sunucu üzerinden açmak daha sağlıklı.

## Yayına almadan önce yapılması gerekenler

1. **E-posta formu:** İletişim formları ve "Projenizi Konuşalım" hızlı teklif formu [Web3Forms](https://web3forms.com) üzerinden e-posta gönderiyor. `ui_kits/website/shared.js` içindeki `WEB3FORMS_ACCESS_KEY` değerini kendi ücretsiz Web3Forms anahtarınla değiştirmen gerekiyor — aksi halde formlar "gönderilemedi" hatası verir.
2. **Fotoğraflar:** Şu an sitedeki hero, hizmet, proje ve blog görselleri Pexels'ten alınmış, ücretsiz kullanım lisanslı stok fotoğraflar (her birinin kaynağı `<image-slot>` bileşeninin `credit` alanında görünüyor). Gerçek proje fotoğrafların eline geçtikçe bu görsellerin üzerine sürükle-bırak yaparak kendi fotoğraflarınla değiştirebilirsin.
3. **Ekip fotoğrafları:** Hakkımızda sayfasındaki kurucu ve ekip fotoğrafları bilinçli olarak boş placeholder olarak bırakıldı — gerçek olmayan bir stok fotoğrafı gerçek bir isme (örn. kurucu) atfetmek yanıltıcı olacağı için. Bu alanlara gerçek ekip fotoğraflarını eklemen gerekiyor.
4. **WhatsApp numarası ve iletişim bilgileri:** `shared.js` içindeki `WHATSAPP_NUMBER` ve sayfalardaki adres/telefon bilgilerini güncel tutmayı unutma.

## Klasör yapısı (özet)

```
tokens/               tasarım tokenları (renk, tipografi, boşluk, efekt)
components/           forms, feedback, layout, navigation, overlays bileşenleri
guidelines/           marka, ikonografi, e-posta şablonu
ui_kits/website/       yayına hazır kurumsal site (tüm .html sayfalar + shared.js)
assets/logo/          logo dosyaları
```
