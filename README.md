# Modes Mobilya — Kurumsal Web Sitesi

Bu repo, Modes Mobilya için hazırladığım kurumsal web sitesini içeriyor. Villa, ofis, fabrika ve konut projelerinde mobilya imalatından inşaata, mermerden elektrik/sıhhi tesisata kadar dokuz farklı hizmet branşını tek çatı altında anlatan, çok sayfalı bir kurumsal site.

Sadeliği önemsedim: site tamamen düz HTML + CSS olarak yazıldı, JavaScript sadece gerçekten gerekli olan birkaç noktada (mobil menü, form gönderimi, proje filtreleme) ve kendi ayrı dosyalarında kullanılıyor. Herhangi bir framework, build adımı ya da paket yöneticisi yok — `public/` klasörünü olduğu gibi GitHub Pages, Netlify, Vercel ya da herhangi bir statik hosting'e koyup yayınlayabilirsin.

## Klasör yapısı

```
public/
  index.html              anasayfa
  hakkimizda.html
  hizmetler.html
  projeler.html
  blog.html
  blog-*.html             6 adet blog yazısı
  iletisim.html
  css/
    tokens.css            renk, tipografi, boşluk, gölge değişkenleri
    site.css              tüm bileşen ve sayfa stilleri
  js/
    config.js             Web3Forms anahtarı + e-posta gönderim fonksiyonu
    nav.js                mobil menü aç/kapa
    quick-project.js       "Projenizi Konuşalım" hızlı teklif modalı
    contact-form.js        İletişim sayfasındaki genel form
    project-filter.js      Projelerimiz sayfasındaki kategori filtresi
  assets/
    logo/logo_modes.png
    icons.svg             tüm ikonlar için tek SVG sprite (JS gerektirmez)
```

## Sitede neler var

- **Anasayfa** — hero, hakkımızda özeti, dört mimari odak alanı (villa/ofis/fabrika/ev), branşlar, mutfak vitrini, öne çıkan projeler, SSS ve iletişim çağrısı.
- **Hakkımızda** — şirket hikayesi, değerler, zaman çizelgesi ve ekip tanıtımı.
- **Hizmetlerimiz** — dokuz branşın (mobilya imalatı, inşaat, mermer, elektrik tesisatı, sıhhi tesisat, mekanik, boya, zemin döşeme, merdiven tasarımı) her biri kendi görseli ve açıklamasıyla.
- **Projelerimiz** — kategoriye göre filtrelenebilen tamamlanmış proje galerisi (filtre butonları `js/project-filter.js` ile çalışıyor, framework yok).
- **Blog** — villa, ofis, mermer, fabrika ve mutfak konularında SEO'ya uygun içerik üretilmiş 6 örnek yazı.
- **İletişim** — genel iletişim formu, gömülü Google Haritalar konumu ve iletişim bilgileri.

Tüm sayfalarda ortak bir üst menü, WhatsApp'a hızlı erişim butonu (düz bir `<a>` linki, JS gerekmiyor) ve her CTA butonunda açılan "Projenizi Konuşalım" adında kısa bir teklif formu (modal) var. SSS bölümü native `<details>`/`<summary>` etiketleriyle çalışıyor, ayrıca JS gerekmiyor.

## Nasıl çalıştırılır

Build adımı yok. En kolay yol:

```bash
npx serve public
```

ya da tercih ettiğin herhangi bir statik dosya sunucusuyla `public/` klasörünü serve edip `index.html` adresine gitmen yeterli. GitHub Pages'te yayınlamak için repo ayarlarından "Pages" kaynağını `public/` klasörüne işaret ettirmen yeterli.

## Yayına almadan önce yapılması gerekenler

1. **E-posta formu:** İletişim formu ve "Projenizi Konuşalım" hızlı teklif formu [Web3Forms](https://web3forms.com) üzerinden e-posta gönderiyor. `public/js/config.js` içindeki `WEB3FORMS_ACCESS_KEY` değerini kendi ücretsiz Web3Forms anahtarınla değiştirmen gerekiyor — aksi halde formlar "gönderilemedi" hatası verir.
2. **Fotoğraflar:** Hero, hizmet, proje ve blog görselleri Pexels'ten alınmış, ücretsiz kullanım lisanslı stok fotoğraflar. Gerçek proje fotoğrafların eline geçtikçe ilgili `<img>` etiketlerinin `src` değerini kendi görsellerinle değiştirebilirsin.
3. **Ekip fotoğrafları:** Hakkımızda sayfasındaki kurucu ve ekip fotoğrafları bilinçli olarak boş placeholder (`.photo-placeholder`) olarak bırakıldı — gerçek olmayan bir stok fotoğrafı gerçek bir isme (örn. kurucu) atfetmek yanıltıcı olacağı için. Bu alanlara gerçek ekip fotoğraflarını eklemen gerekiyor.
4. **WhatsApp numarası ve iletişim bilgileri:** Her sayfadaki WhatsApp linkini, adres/telefon bilgilerini güncel tutmayı unutma (metin olarak sayfalarda doğrudan yer alıyor, tek bir yerden değişmiyor — arattığında hepsini bulabilirsin).
