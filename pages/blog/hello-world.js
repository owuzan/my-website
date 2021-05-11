import CommentForm from "../../components/CommentForm";

export default function Hakkimda() {
  return (
    <div className="container max-w-5xl px-4 mx-auto space-y-6">
      <h1 className="text-6xl font-black text-gray-900 text-center">
        Hello World
      </h1>
      <div className="prose max-w-none text-xl text-gray-500">
        <p>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'lerden beri endüstri standardı sahte metinler olarak
          kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
          aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
          1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
          sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
        </p>
        <h2>Neden Kullanırız?</h2>
        <p>
          Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen
          bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin
          gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf
          dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü
          yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır
          metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında
          'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım
          aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen
          kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli
          sürümleri geliştirilmiştir.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="text-3xl font-bold text-gray-900">Yorumlar</h4>
        <ul className="space-y-4">
          <li className="flex flex-col space-y-4 border-t border-gray-200 py-8">
            <div className="flex space-x-4 items-center">
              <figure className="flex-none">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14Gj96DzNYbiS6uQx2e8BgbgOsYaalljgmT0tel9fpA=s96-c"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </figure>
              <div className="text-gray-900 text-lg font-medium">
                Oğuzhan Yımaz
              </div>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic
              vel consequatur ratione dolores iste aliquam nemo harum placeat
              quos neque voluptas veritatis officia repudiandae, voluptatibus ut
              eos modi expedita.
            </p>
          </li>
          <li className="flex flex-col space-y-4 border-t border-gray-200 py-8">
            <div className="flex space-x-4 items-center">
              <figure className="flex-none">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14Gj96DzNYbiS6uQx2e8BgbgOsYaalljgmT0tel9fpA=s96-c"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </figure>
              <div className="text-gray-900 text-lg font-medium">
                Oğuzhan Yımaz
              </div>
            </div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic
              vel consequatur ratione dolores iste aliquam nemo harum placeat
              quos neque voluptas veritatis officia repudiandae, voluptatibus ut
              eos modi expedita.
            </p>
          </li>
        </ul>
      </div>
      <CommentForm slug="hello-world" />
    </div>
  );
}
