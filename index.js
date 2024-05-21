fetch("esquema_podcast.xml")
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml")
    console.log('xml:', xml)


    const posts = xml.querySelector("posts")
    console.log("posts: ", posts)
    const entradas = posts.querySelectorAll("post")
    console.log("entradas: ", entradas)

    console.log(entradas[0].getAttribute("titulo"))

    console.log(posts[1].getAttribute("fecha"))
    console.log(posts[1].querySelector("autor").textContent)
    

    const post = xml.querySelector("autor")

    console.log(post[1].querySelector("autor").textContent)
    console.log(post[1].querySelector("avatar").textContent)

    

    console.log(entradas[2].getAtribbute("titulo"))
    console.log(posts[2].getAtribbute("fecha"))
    console.log(posts[2].querySelector("autor").textContent)


    console.log(post[2].querySelector("autor").textContent)
    console.log(post[2].querySelector("avatar").textContent)

    console.log(entradas[3].getAtribbute("titulo"))
    console.log(posts[3].getAtribbute("fecha"))
    console.log(posts[3].querySelector("autor").textContent)


    console.log(post[3].querySelector("autor").textContent)
    console.log(post[3].querySelector("avatar").textContent)

    console.log(entradas[4].getAtribbute("titulo"))
    console.log(posts[4].getAtribbute("fecha"))
    console.log(posts[4].querySelector("autor").textContent)


    console.log(post[4].querySelector("autor").textContent)
    console.log(post[4].querySelector("avatar").textContent)

    console.log(entradas[5].getAtribbute("titulo"))
    console.log(posts[5].getAtribbute("fecha"))
    console.log(posts[5].querySelector("autor").textContent)


    console.log(post[5].querySelector("autor").textContent)
    console.log(post[5].querySelector("avatar").textContent)

    console.log(posts[i].querySelector("introduccion").textContent)
    console.log(posts[i].querySelector("descripcion").textContent)
    console.log(posts[i].querySelector("tiempo_lectura").textContent)
    console.log(posts[i].querySelector("num_visualizaciones").textContent)
    console.log(posts[i].querySelector("num_comentarios").textContent)
    console.log(posts[i].querySelector("num_megusta").textContent)
    console.log(posts[i].querySelector("imagen").textContent)



    for(let i=0;i<posts.length;i++){
        let autor = posts[i].querySelector("autor").textContent
        let introduccion = posts[i].querySelector("introduccion").textContent
        let descripcion = posts[i].querySelector("descripcion").textContent
        let tiempo_lectura = posts[i].querySelector("tiempo_lectura").textContent
        let num_visualizaciones = posts[i].querySelector("num_visualizaciones").textContent
        let num_comentarios = posts[i].querySelector("num_comentarios").textContent
        let num_megusta = posts[i].querySelector("num_megusta").textContent
        let imagen = posts[i].querySelector("imagen").textContent
        console.log(entrada)
        entradas = entradas + entrada
    }

    document.querySelector('#divEntradas').innerHTML = entradas
})