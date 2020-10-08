// var mydata = JSON.parse(`{
//     "researches" : [
//         {
//             "bigTitle" : "Desa Pandanwangi",
//             "judul-penelitian" : "Penelitian Desa Pandanwangi di Cianjur",
//             "tanggal-penelitian" : "10-10-2020",
//             "tempat-penelitian" : "Cianjur",
//             "peneliti" : "Mr. Bob, Mr. Johnson, Mr. Garrett",
//             "x-360s" : [
//                 {
//                     "360-filename" : "3d01.jpg"
//                 },
//                 {
//                     "360-filename" : "3d02.jpg"
//                 }
//             ],
//             "x-3ds" : [
//                 {
//                     "3d-top-filename" : "3dtop01.jpg",
//                     "3d-bottom-filename" : "3dbottom01.jpg"
//                 },
//                 {
//                     "3d-top-filename" : "3dtop02.jpg",
//                     "3d-bottom-filename" : "3dbottom02.jpg"
//                 }
//             ],
//             "x-navs" : [
//                 {
//                     "nav-filename" : "nav01.jpg"
//                 },
//                 {
//                     "nav-filename" : "nav02.jpg"
//                 }
//             ]
//         }
//     ]
// }`)

var devdata = JSON.parse(`{
    "anggota" : [
        {
            "nama" : "Albari"
        },
        {
            "nama" : "Fachri"
        },
        {
            "nama" : "Argi"
        }
    ]
}`)

document.head.innerHTML += `
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Hello, world!</title>
`

document.body.innerHTML += `
    <h1>Lorem Ipsum<h1>
`

document.body.innerHTML += `
    <h1>Hello, world!</h1>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
`

var i;
for (i = 0; i < 3; i++) {
    document.body.innerHTML += '<h1>'+devdata.anggota[i].nama+'</h1>'
}

// document.body.innerHTML += '<h1>'+mydata.researches[0].bigTitle+'</h1>'
