import BurgerMenu from "./icons/BurgerMenu"

export default function Header() {
	return <header className="flex items-center w-full bg-white z-30 justify-between h-[var(--header-height)] px-[var(--padding-x)]">
		<h1><a href="/"><img src="/logo-orange.png" alt="Logo" width="30" /></a></h1>
		<div>
			<BurgerMenu />
		</div>
	</header >
}
