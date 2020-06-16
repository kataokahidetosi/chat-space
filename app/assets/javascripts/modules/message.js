$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="messagefield__box" data-message-id=${message.id}>
          <div class="messagefield__box__info">
            <div class="messagefield__box__info__username">
              ${message.user_name}
            </div>
            <div class="messagefield__box__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="messagefield__box__comment">
            <p class="messagefield__box__comment__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="messagefield__box" data-message-id=${message.id}>
        <div class="messagefield__box__info">
          <div class="messagefield__box__info__username">
            ${message.user_name}
          </div>
          <div class="messagefield__box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="messagefield__box__comment">
          <p class="messagefield__box__comment__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $('.submit-btn'). removeAttr('data-disable-with');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messagefield').append(html);
      $('.messagefield').animate({ scrollTop: $('.messagefield')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});