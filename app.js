$(() => {

	const $openBtn = $('#openModal');
	const $modal = $('#modal');
	const $closeBtn = $('#close');

	const openModal = () => {
		$modal.css('display', 'block')
	}
	const closeModal = () => {
		$modal.css('display', 'none')
	}

	$openBtn.on('click', openModal)
	$closeBtn.on('click', closeModal)




	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://burgers1.p.rapidapi.com/burgers",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "burgers1.p.rapidapi.com",
			"x-rapidapi-key": "5ec903a39dmsh9e569404de273edp11e8a0jsnddd006fbb6c0"
		}
	}


	$.ajax(settings).done(function (response) {
		// console.log(response);







		for (let i = 0; i < response.length; i++) {
			const $div = $('<div>').appendTo('body').addClass('style')
			const $newDiv = $('<button>').addClass('burger')


			// $('.buttons').append($newDiv)
			const $anotherDiv = $('<div>')
			$div.append($newDiv)
			$div.append($anotherDiv)
			$newDiv.text(response[i].name)
			$anotherDiv.append($('<h2>').text(response[i].restaurant)).css('display','none')
			const website = response[i].web.startsWith('http') ? response[i].web : 'https://' + response[i].web
			$anotherDiv.append($('<a>').attr('href',website).text(response[i].web))

			$anotherDiv.append($('<h4>').text(response[i].description))
			$anotherDiv.append($('<h5>').text(response[i].ingredients))

			console.log(response[i]);


			$newDiv.on('click', (e) => {
				$(event.currentTarget).val()
				const isHidden = $anotherDiv.css('display') === 'none';				$anotherDiv.css('display', isHidden ? 'block' : 'none')

				console.log($anotherDiv	.css('display'));


			})


		}

	})
})
