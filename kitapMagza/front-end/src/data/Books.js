const data = [
    {
        "id": crypto.randomUUID(),
        "image": "https://cdn.bkmkitap.com/rezonans-kanunu-373649-13496278-37-O.jpg",
        "title": "Rezonans Kanunu",
        "description": "Size hep ulaşılmaz görünen mutlu anları özlüyorsunuz. Evrendeki sonsuz zenginliğin bir parçası olmak ve onunla uyum içinde kalmak istiyorsunuz. Artık hayatın gerçek, bilgece sırlarından birini keşfetme zamanı geldi: Hissettiğiniz ya da düşündüğünüz her şey, bir rezonans alanı oluşturur ve hem sizi hem de çevrenizdekileri kalıcı olarak değiştirir.Kuantum düşünce tekniğinin temelinde yer alan Rezonans Kanunu’na göre sizi isteklerinizi gerçekleştirmekten alıkoyan sınırlar yalnızca kalbinizdedir. Pierre Franckh bu kitapta arzularınızı bloke edebilme potansiyeline sahip iç ve dış etkileri nasıl ortadan kaldıracağınızı, hedeflerinize dair pozitif bir imgelemeyi nasıl yapacağınızı, nasıl güçlü rezonans alanı kuracağınızı, düşünce gücünüz ve hislerinizle hayatınızda olmasını istediğiniz değişiklikleri nasıl elde edeceğinizi anlatıyor.",
        "cat": "Kişisel Gelişim",
        "rating": 5,
        "price": 98,
        "paper":206,
        "createdAt": "2024-01-24"
    },
    {
        "id": crypto.randomUUID(),
        "image": "https://cdn.bkmkitap.com/on-ucu-saklamak-13485124-85-O.jpg",
        "title": "On Üç’ü Saklamak",
        "description": "Johnny Kavanagh’nın kaderinde spor yıldızı olmak vardı. Ancak feci bir sakatlık çok sevdiği on üç numaralı formadan ayrılmasına sebep olmuş, onu hayallerine tutunmak için mücadele etmeye zorlamıştı. Yolunu kaybetmiş durumdaydı, özgüvensiz ve umutsuz bir halde teselli arayışına girmişti. Bu yüzden, uyanık olduğu her saatte zihnini meşgul eden kızın gizemini çözmeye karar verdi.Shannon Lynch daha önce sır saklamakta hiç sorun yaşamamıştı. Şeytanların ve kötü adamların yalnızca peri masallarında değil, gerçek dünyada da var olduklarını biliyordu. Geçirdiği travmanın ardından çaresizce küçük kardeşlerini korumaya çalışıyordu. Ama geleceği gözlerinin önünde dağılırken kendini tekrar ailesinin olayları gizleme çabasının içinde bulmuştu. Şiddet görüp paramparça hale gelmiş, sonrasında ise çevresine duvarlar örmüştü ve insanlara olan güveni çok büyük bir darbe almış durumdaydı.Yalnızca tek bir kişi o duvarlara tırmanabilirdi. Kalbinin sahibi olan çocuk. Ancak sırlar ortaya çıktığında hayatları sonsuza dek değişebilirdi. Johnny ve Shannon’ın aşkı hayatta kalabilecek miydi?",
        "cat": "Roman",
        "rating": 4,
        "price": 198,
        "paper":784,
        "createdAt": "2024-05-14"
    },
   
]

function getAllBooks() {
    return data;
}

export { getAllBooks };