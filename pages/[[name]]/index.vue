<script setup>
	import { movies } from "~/data/movies";

    const route = useRoute()
    const name = route.params.name;
	const movieList = movies.filter(
		(movie) => movie.movie_name == name
	);
</script>

<template>
	<div class="flex flex-wrap justify-center items-center h-[80vh]">
		<template v-for="movie in movieList">
			<Card
				:img_src="movie.img_src"
				:movie_name="movie.movie_name"
				:gener="movie.gener"
			/>
		</template>
	</div>
</template>
