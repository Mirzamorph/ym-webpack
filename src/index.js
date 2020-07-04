import { data } from './data'
import './css/main.scss'

ymaps.ready(() => {

  const mapPiter = new ymaps.Map("map", {
    center: [59.91807704072416,30.304899499999895],
    zoom: 10,
    controls: []
  },{
    suppressMapOpenBlock: true
    // restrictMapArea: [[59.45491523077794,29.634223984005246],[60.131770983132974,31.254707382442746]]
  });


  data.forEach(({ coords, mark, description}, index) => {
    mapPiter.geoObjects.add(
      new ymaps.Placemark(coords, {
        balloonContent: `${description} ${index + 1}`
      }, {
        preset: mark
      })
    )
  })


  document.querySelector('.change-map').onclick = () => {
    // mapPiter.setCenter([57.767265, 40.925358])
    // mapPiter.setType('yandex#satellite')
    mapPiter.panTo([55.65280597843513,37.634816459742524],{
      // duration: 1300
      flying: true
    })

  }
})
