const cl = console.log;


let result =''

anime.forEach(movie =>{
	result	+= `		
			<div class="col-sm-6 col-md-4 mb-4">
				<div class="card">
					<figure class="movieCard">
						<img src=${movie.image}
						title=${movie.title}
						alt=${movie.title}>
						<figcaption>
							<div class="titleInfo">
								<div class="row">
									<div class="col-10">
									<h2>${movie.title}</h2>
									</div>
									<div class="co-2">
									<h3><span class="badge badge-* badge-success">${movie.rating}</span></h3>
									</div>
								</div>
							</div>
							<div class="overview">
								<h5>${movie.title}<h5>
								<p>${movie.overview}</p>
							</div>
						</figcaption>
					</figure>
				</div>
			</div>`
})


movieContainer.innerHTML = result;
