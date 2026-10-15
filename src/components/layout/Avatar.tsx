import avatar from '../../Assets/images/avatar-cutout.png'

/**
 * Круглый аватар для строки с именем: тонкое внешнее кольцо с зазором,
 * тёплый графитовый «диск» и вырезанный портрет, стоящий на его нижнем крае.
 */
export const Avatar = ({ alt }: { alt: string }) => (
	<span className="relative block h-16 w-16 shrink-0 rounded-full border border-bone/20 p-[5px] md:h-[5.25rem] md:w-[5.25rem]">
		<span className="block h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-[#34322e] to-[#1a1917]">
			<img
				src={avatar}
				alt={alt}
				width={768}
				height={1024}
				draggable={false}
				className="h-full w-full object-cover object-top"
			/>
		</span>
		{/* Единственная акцентная деталь: маленькая точка на кольце */}
		<span
			aria-hidden
			className="absolute bottom-[3px] right-[3px] h-2 w-2 rounded-full bg-accent ring-2 ring-ink md:bottom-[5px] md:right-[5px] md:h-2.5 md:w-2.5"
		/>
	</span>
)
