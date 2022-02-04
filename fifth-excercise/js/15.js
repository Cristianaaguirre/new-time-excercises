//Metodos de Propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo la canción con el ID: ${id}`)
    },

    pausar : function() {
        console.log("pausando...")
    },
    
    creandoPlaylist : function(nombre) {
        console.log(`Creando la PlayList: ${nombre}`)
    },

    reproducirPlaylist : function (nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Borrando cancion con el ID: ${id}`)
}

reproductor.reproducir(1234);
reproductor.pausar();
reproductor.borrarCancion(12);
reproductor.creandoPlaylist('Folklore');
reproductor.reproducirPlaylist("Folklore");