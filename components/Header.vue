<template >
	<div
		class="header bg-white w-full h-inherit flex justify-between items-center px-4 shadow-sm shadow-green-300/50 sticky top-0"
	>
		<NuxtLink
			to="/"
			class="logo text-[25px] tracking-widest font-bold text-green-400"
			>LOGO</NuxtLink
		>
		<div class="nav-NuxtLinkst font-semibold w-[30%]">
			<ul class="flex justify-around">
				<NuxtLink to="/feel-good" class="p-[10px]">Feel Good</NuxtLink>
				<NuxtLink to="/martin" class="p-[10px]">Martin</NuxtLink>
				<NuxtLink to="/nolens" class="p-[10px]">Nolen</NuxtLink>
			</ul>
		</div>

		<div
			class="search-box rounded-[20px] border-2 border-green-300 p-[2px] flex items-center"
		>
			<input
				type="text"
				placeholder="search"
				class="outline-none w-[90%] h-[50%] px-2 rounded-[20px]"
			/>
			<MdiIcon icon="mdiSearchWeb" />
		</div>
	</div>
</template>
