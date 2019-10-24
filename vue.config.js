module.exports ={
	pages:{
		// usarlas como partes dentro de cada page
		home:{
			entry:[
				'./src/pages/home/main.js'
			],
			template: 'public/home.html',
			filename: 'index.html',
			title: 'Home',
			chunks: ['chunk-vendors', 'chunk-common', 'home']
		},
		filter:{
			entry:[
				'./src/pages/filter/main.js'
			],
			template: 'public/filter.html',
			filename: 'filtro.html',
			title: 'Filter',
			chunks: ['chunk-vendors', 'chunk-common', 'filter']
		},
		descripcion:{
			entry:[
				'./src/pages/descripcion/main.js'
			],
			template: 'public/descripcion.html',
			filename: 'descripcion.html',
			title: 'Descripcion',
			chunks: ['chunk-vendors', 'chunk-common', 'descripcion']
		}
	}
}