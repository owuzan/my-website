import Card from "../components/Card";
import Badge from "../components/Badge";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Card
          top={<Badge color="orange">Ben Kimim?</Badge>}
          title="Oğuzhan Yılmaz"
        >
          <p>
            Frontend developer, motosiklet tutkunu, kahveci, filmci, bilimci,
            meraklı, araştırmacı, geceyi gündüz eden, işini severek yapan,
            öğrenci...
          </p>
        </Card>
        <Card transparent title="Başka ne mi?">
          <p>Merak ettiysen beni tanıyabileceğin bir sayfa mevcut.</p>
          <Button>Beni tanımaya devam et</Button>
        </Card>
        <Card transparent title="Neler yazdım?" direction="right">
          <p>Okumaya meraklı biriysen seni şuraya alalım.</p>
          <Button>Blog sayfama gidelim</Button>
        </Card>
        <Card title="Bu site neden var?" top={<Badge>Amaç ne?</Badge>}>
          <p>Öncelikle hoş geldin ✌</p>
          <div>
            <p>Kendime not tutmak için var.</p>
            <p>Bildiklerimi paylaşmak için var.</p>
            <p>Kendimi ifade edebilmem için var.</p>
            <p>Beni daha iyi tanıyabilmen için var.</p>
          </div>
        </Card>
        <Card
          title="Yeni bir şeyler keşfetmeyi sever misin?"
          top={<Badge color="green">Keşfet</Badge>}
        >
          <p>Eğer cevabın evet ise harika 👌</p>
          <p>
            Senin için harika bir sayfam var. Keşfettiğim güzel araçları ve
            siteleri kategorize edilmiş bir şekilde saklamaya çalışıyorum. Bu
            sayfayı yeni şeyler keyfettikçe güncelliyorum. Umarım işine yarar
            bir şeyler bulursun.
          </p>
        </Card>
        <Card title="Hadi yeni şeyler öğrenelim!" transparent>
          <p>
            Bu arada dilersen bu sayfaya yorum yaparak işe yarar araçları
            benimle paylaşabilirsin.
          </p>
          <Button>Beraber keşfedelim</Button>
        </Card>
      </div>
    </div>
  );
}
