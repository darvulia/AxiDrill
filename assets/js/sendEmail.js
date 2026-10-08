SnapAlert().SnapOptions({ });

$('form.ajax').submit(function (element) {
    element.preventDefault();

    let objectForm = $(this),
        sendMethod = objectForm.attr('method') || 'POST',
        sendUrl = objectForm.attr('action') || '',
        
         sendData = {
            name: (objectForm.find('#name').val() || '') + ' ' + (objectForm.find('#lastname').val() || ''),
            email: objectForm.find('#email').val() || '',
            subject: objectForm.find('#subject').val() || '',
            comments: 'Telefono de Contacto: ' + (objectForm.find('#comments').val() || ''),
            _subject: objectForm.find('#subject').val() || '',
            _captcha: objectForm.find('#_captcha').val() || '',
            _template: objectForm.find('#_template').val() || '',
        };

/*         objectForm.find("[name]").each(function (index, element) {
            let item = $(this),
                name = item.attr('name') || '',
                nameValue = item.val() || '';

            sendData[name] = nameValue;
        }); */

        console.log(sendMethod);
        console.log(sendUrl);
        console.log(sendData);

    // https://api.jquery.com/jQuery.ajax
/*     $.ajax({
        method: sendMethod,
        url: sendUrl,
        dataType: 'json',
        accepts: 'application/json',
        data: sendData,
        success: function(response) {
            alert("Gracias por tu mensaje, nos pondremos en contacto contigo lo antes posible.");
        },
        error: (err) => console.log(err)
    }); */

        jQuery
        .ajax({
          url: sendUrl,
          data: sendData,
          type: sendMethod,
        })
        .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          // formMessages.removeClass("error");
          // formMessages.addClass("success");
          // Set the message text.
          // formMessages.text(response);
          // Clear the form.
          // $(form + ' input:not([type="submit"]),' + form + " textarea").val("");    
            SnapAlert().info('Info', 'Informacion enviada!');

        })
        .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          // formMessages.removeClass("success");
          // formMessages.addClass("error");
          // Set the message text.
          //if (data.responseText !== "") {
            // formMessages.html(data.responseText);
          //} else {
           // formMessages.html(
            //  "Oops! An error occured and your message could not be sent."
           // );
          //}
            SnapAlert().error('Error', 'Something went wrong.');
        });



});
