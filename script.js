function locomotive() { //Ini adalah fungsi yang mengatur parallax scrolling menggunakan Locomotive Scroll dan GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger); //Mengatur ScrollTrigger sebagai plugin GSAP.

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true , 
  });
  locoScroll.on("scroll", ScrollTrigger.update); //Mengatur event handler untuk memperbarui ScrollTrigger saat scroll terjadi.

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, //Mengatur proxy scroller untuk elemen #main, mengatur bagaimana ScrollTrigger harus menangani pengguliran dalam elemen tersebut.

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
} //Menambahkan event listener untuk memperbarui locoScroll saat ScrollTrigger di-refresh.
locomotive(); //Memanggil fungsi locomotive


const canvas = document.querySelector("canvas"); //Mendapatkan elemen kanvas.
const context = canvas.getContext("2d"); //Mendapatkan konteks 2D untuk kanvas.

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; //Mengatur ukuran kanvas ke lebar dan tinggi


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
}); //Menambahkan event listener untuk menangani perubahan ukuran jendela dan mengubah ukuran kanvas sesuai dengan itu.

function files(index) { // Fungsi ini mengembalikan path (jalur) ke gambar berdasarkan indeks.
  var data = `
     ./xixi/0001.png
     ./xixi/0002.png
     ./xixi/0003.png
     ./xixi/0004.png
     ./xixi/0005.png
     ./xixi/0006.png
     ./xixi/0007.png
     ./xixi/0008.png
     ./xixi/0009.png
     ./xixi/0010.png
     ./xixi/0011.png
     ./xixi/0012.png
     ./xixi/0013.png
     ./xixi/0014.png
     ./xixi/0015.png
     ./xixi/0016.png
     ./xixi/0017.png
     ./xixi/0018.png
     ./xixi/0019.png
     ./xixi/0020.png
     ./xixi/0021.png
     ./xixi/0022.png
     ./xixi/0023.png
     ./xixi/0024.png
     ./xixi/0025.png
     ./xixi/0026.png
     ./xixi/0027.png
     ./xixi/0028.png
     ./xixi/0029.png
     ./xixi/0030.png
     ./xixi/0031.png
     ./xixi/0032.png
     ./xixi/0033.png
     ./xixi/0034.png
     ./xixi/0035.png
     ./xixi/0036.png
     ./xixi/0037.png
     ./xixi/0038.png
     ./xixi/0039.png
     ./xixi/0040.png
     ./xixi/0041.png
     ./xixi/0042.png
     ./xixi/0043.png
     ./xixi/0044.png
     ./xixi/0045.png
     ./xixi/0046.png
     ./xixi/0047.png
     ./xixi/0048.png
     ./xixi/0049.png
     ./xixi/0050.png
     ./xixi/0051.png
     ./xixi/0052.png
     ./xixi/0053.png
     ./xixi/0054.png
     ./xixi/0055.png
     ./xixi/0056.png
     ./xixi/0057.png
     ./xixi/0058.png
     ./xixi/0059.png
     ./xixi/0060.png
     ./xixi/0061.png
     ./xixi/0062.png
     ./xixi/0063.png
     ./xixi/0064.png
     ./xixi/0065.png
     ./xixi/0067.png
     ./xixi/0068.png
     ./xixi/0069.png
     ./xixi/0070.png
     ./xixi/0071.png
     ./xixi/0072.png
     ./xixi/0073.png
     ./xixi/0074.png
     ./xixi/0075.png
     ./xixi/0076.png
     ./xixi/0077.png
     ./xixi/0078.png
     ./xixi/0079.png
     ./xixi/0080.png
     ./xixi/0081.png
     ./xixi/0082.png
     ./xixi/0083.png
     ./xixi/0084.png
     ./xixi/0085.png
     ./xixi/0086.png
     ./xixi/0087.png
     ./xixi/0088.png
     ./xixi/0089.png
     ./xixi/0090.png
     ./xixi/0091.png
     ./xixi/0092.png
     ./xixi/0093.png
     ./xixi/0094.png
     ./xixi/0095.png
     ./xixi/0096.png
     ./xixi/0097.png
     ./xixi/0098.png
     ./xixi/0099.png
     ./xixi/0100.png
     ./xixi/0101.png
     ./xixi/0102.png
     ./xixi/0103.png
     ./xixi/0104.png
     ./xixi/0105.png
     ./xixi/0106.png
     ./xixi/0107.png
     ./xixi/0108.png
     ./xixi/0109.png
     ./xixi/0110.png
     ./xixi/0111.png
     ./xixi/0112.png
     ./xixi/0113.png
     ./xixi/0114.png
     ./xixi/0115.png
     ./xixi/0116.png
     ./xixi/0117.png
     ./xixi/0118.png
     ./xixi/0119.png
     ./xixi/0120.png
     ./xixi/0121.png
     ./xixi/0122.png
     ./xixi/0123.png
     ./xixi/0124.png
     ./xixi/0125.png
     ./xixi/0126.png
     ./xixi/0127.png
     ./xixi/0128.png
     ./xixi/0129.png
     ./xixi/0130.png
     ./xixi/0131.png
     ./xixi/0132.png
     ./xixi/0133.png
     ./xixi/0134.png
     ./xixi/0135.png
     ./xixi/0136.png
     ./xixi/0137.png
     ./xixi/0138.png
     ./xixi/0139.png
     ./xixi/0140.png
     ./xixi/0141.png
     ./xixi/0142.png
     ./xixi/0143.png
     ./xixi/0144.png
     ./xixi/0145.png
     ./xixi/0146.png
     ./xixi/0147.png
     ./xixi/0148.png
     ./xixi/0149.png
     ./xixi/0150.png
     ./xixi/0151.png
     ./xixi/0152.png
     ./xixi/0153.png
     ./xixi/0154.png
     ./xixi/0155.png
     ./xixi/0156.png
     ./xixi/0157.png
     ./xixi/0158.png
     ./xixi/0159.png
     ./xixi/0160.png
     ./xixi/0161.png
     ./xixi/0162.png
     ./xixi/0163.png
     ./xixi/0164.png
     ./xixi/0165.png
     ./xixi/0166.png
     ./xixi/0167.png
     ./xixi/0168.png
     ./xixi/0169.png
     ./xixi/0170.png
     ./xixi/0171.png
     ./xixi/0172.png
     ./xixi/0173.png
     ./xixi/0174.png
     ./xixi/0175.png
     ./xixi/0176.png
     ./xixi/0177.png
     ./xixi/0178.png
     ./xixi/0179.png
     ./xixi/0180.png
     ./xixi/0181.png
     ./xixi/0182.png
     ./xixi/0183.png
     ./xixi/0184.png
     ./xixi/0185.png
     ./xixi/0186.png
     ./xixi/0187.png
     ./xixi/0188.png
     ./xixi/0189.png
     ./xixi/0190.png
     ./xixi/0191.png
     ./xixi/0192.png
     ./xixi/0193.png
     ./xixi/0194.png
     ./xixi/0195.png
     ./xixi/0196.png
     ./xixi/0197.png
     ./xixi/0198.png
     ./xixi/0199.png
     ./xixi/0200.png
     ./xixi/0201.png
     ./xixi/0202.png
     ./xixi/0203.png
     ./xixi/0204.png
     ./xixi/0205.png
     ./xixi/0206.png
     ./xixi/0207.png
     ./xixi/0208.png
     ./xixi/0209.png
     ./xixi/0210.png
     ./xixi/0211.png
     ./xixi/0212.png
     ./xixi/0213.png
     ./xixi/0214.png
     ./xixi/0215.png
     ./xixi/0216.png
     ./xixi/0217.png
     ./xixi/0218.png
     ./xixi/0219.png
     ./xixi/0220.png
     ./xixi/0221.png
     ./xixi/0222.png
     ./xixi/0223.png
     ./xixi/0224.png
     ./xixi/0225.png
     ./xixi/0226.png
     ./xixi/0227.png
     ./xixi/0228.png
     ./xixi/0229.png
     ./xixi/0230.png
     ./xixi/0231.png
     ./xixi/0232.png
     ./xixi/0233.png
     ./xixi/0234.png
     ./xixi/0235.png
     ./xixi/0236.png
     ./xixi/0237.png
     ./xixi/0238.png
     ./xixi/0239.png
     ./xixi/0240.png
     ./xixi/0241.png
     ./xixi/0242.png
     ./xixi/0243.png
     ./xixi/0244.png
     ./xixi/0245.png
     ./xixi/0246.png
     ./xixi/0247.png
     ./xixi/0248.png
     ./xixi/0249.png
     ./xixi/0250.png
     ./xixi/0251.png
     ./xixi/0252.png
     ./xixi/0253.png
     ./xixi/0254.png
     ./xixi/0255.png
     ./xixi/0256.png
     ./xixi/0257.png
     ./xixi/0258.png
     ./xixi/0259.png
     ./xixi/0260.png
     ./xixi/0261.png
     ./xixi/0262.png
     ./xixi/0263.png
     ./xixi/0264.png
     ./xixi/0265.png
     ./xixi/0266.png
     ./xixi/0267.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
     ./xixi/0268.png
 `;
  return data.split("\n")[index];
} //Memecah data berdasarkan baris dan mengembalikan path gambar pada indeks tertentu.

const frameCount = 300; //Mengatur jumlah frame untuk animasi.

const images = []; //Array untuk menyimpan gambar-gambar.
const imageSeq = {
  frame: 1,
}; //Objek untuk melacak urutan frame gambar.

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}//Mengisi array images dengan gambar berdasarkan frameCount.

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
}); //Mengatur animasi dengan GSAP untuk imageSeq.

images[1].onload = render; //Memanggil fungsi render() saat gambar pertama selesai di-load.

function render() {
  scaleImage(images[imageSeq.frame], context);
} //Fungsi render untuk menampilkan gambar yang benar.

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}//Fungsi untuk menskalakan gambar ke ukuran yang tepat.

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
}); //Membuat ScrollTrigger untuk kanvas.



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page4",{
  scrollTrigger:{
      trigger:`#page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
  }
}); //: Mengatur animasi untuk halaman tertentu (#page1 hingga #page4) dengan GSAP dan ScrollTrigger.


