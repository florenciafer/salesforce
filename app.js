$(document).ready(() => {
        $.ajax({
            type: 'GET',
            url: 'https://644fc2dcba9f39c6ab6ba850.mockapi.io/api/ecommerce/product',
            dataType: 'json'
        }).done((data) => {
           console.log(data)
           $.each(data, function(index, product) {
            let card = $('<div class="row" style="width: 18rem;">');
            let img = $('<img  class="card-img-top" src="' + product.product_image + '">');
            let cardBody = $('<div class="card-body">');
            let title = $('<h5 class="card-title">' + product.product_name + '</h5>');
            let price = $('<p class="card-text">$' + product.product_price + '</p>');
            let desc = $('<p class="card-text">' + product.product_description + '</p>');
            let btn_delete=$('<button class="btn btn-danger delete-product" style="margin: 0.5em;" data-id="' + product.product_id + '">Eliminar</button>');
            let btn_edit=$('<button class="btn btn-primary edit-product" style="margin: 0.5em;" data-id="' + product.product_id + '">Modificar</button>');

            
            cardBody.append(title);
            cardBody.append(price);
            cardBody.append(desc);
            card.append(img);
            card.append(cardBody);
            card.append(btn_delete);
            card.append(btn_edit);
            
            $('#cards').append(card);
          });
        });
        $('#add-product-btn').on('click', function() {
            $('#add-product-modal').modal('show');
          });
          $('#save-product-btn').on('click', function() {
            const productName = $('#product-name').val();
            const productDescription = $('#product-description').val();
            const productPrice = $('#product-price').val();
            const productImage = $('#product-image').val();
            
            $.ajax({
              type: 'POST',
              url: 'https://644fc2dcba9f39c6ab6ba850.mockapi.io/api/ecommerce/product',
              dataType: 'json',
              data: {
                product_name: productName,
                product_description: productDescription,
                product_price: productPrice,
                product_image: productImage
              }
            }).done((data) => {
              console.log(data);
              $('#add-product-modal').modal('hide');
            }).fail((xhr, status, error) => {
              console.log(error);
            });
          });
          


    });
   