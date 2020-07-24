$(document).ready(function () {
  checkDisplayType()
})
function calculate() {
  $('#calculation').addClass('disabled-div')
  $('.loader').removeClass('loader-hidden')
  let cuc = $('#cuc').val() * 1
  let btc_price = $('#btc_price').val() * 1

  if (btc_price == 0 || cuc == 0) {
    alert('ES NECESARIO QUE COMPLETE LOS CAMPOS DEL FORMULARIO. !!!')
    //RESTORE APPARIENCE
    this.restoreAppearance()
  } else {
    setTimeout(function () {
      //get params
      let interest = 10
      let btc_price_with_percent = (btc_price * 10) / 100 + btc_price

      let result = cuc / btc_price_with_percent
      $('#interrogation_img').css('display', 'none')
      $('#img-bitcoin').css('display', 'block')
      $('#calculate-result').text(result.toPrecision(7) + ' BTC')
      console.log('valuessss', [btc_price_with_percent, result.toPrecision(7)])
      //RESTORE APPARIENCE
      this.restoreAppearance()
    }, 3000)
  }
}
function restoreAppearance() {
  $('#calculation').removeClass('disabled-div')
  $('.loader').addClass('loader-hidden')
}

function checkDisplayType() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#contact-whatsapp').addClass('device-dispositions-contact-icons')
    $('#contact-telegram').addClass(
      'device-dispositions-contact-icons device-dispositions-contact-icons-middle'
    )
    $('#contact-hangout').addClass('device-dispositions-contact-icons')
    $('#btn-calc').addClass('device-btn-calc')

    //paint text contact
    $('#text-whatsapp').addClass('device-text-contact-align ')
    $('#text-telegram').addClass('device-text-contact-align ')
    $('#text-hangout').addClass('device-text-contact-align ')
    //styles row in movile view
    $('#row-calc-action').addClass('device-reduce-width')

    //whatsappqr design
    $('#qr-whatsapp').addClass('device-qr-whatsapp-design')
  } else {
    // The viewport is at least 768 pixels wide
    $('#contact-whatsapp').removeClass('device-dispositions-contact-icons')
    $('#contact-telegram').removeClass(
      'device-dispositions-contact-icons device-dispositions-contact-icons-middle'
    )
    $('#contact-hangout').removeClass('device-dispositions-contact-icons')
    $('#btn-calc').removeClass('device-btn-calc')

    //clean text contact styles
    $('#text-whatsapp').removeClass('device-text-contact-align ')
    $('#text-telegram').removeClass('device-text-contact-align ')
    $('#text-hangout').removeClass('device-text-contact-align ')
    //styles row in movile view
    $('#row-calc-action').removeClass('device-reduce-width')
    //qr
    $('#qr-whatsapp').removeClass('device-qr-whatsapp-design')
    $('#qr-whatsapp').addClass('qr-whatsapp-design')
  }
}
