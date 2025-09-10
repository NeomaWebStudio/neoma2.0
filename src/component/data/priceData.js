import { title } from "process";
const coins = '../../assets/icon/coins.svg';
const time = '../../assets/icon/clock.svg';
const buy = '../../assets/icon/cart.svg';

export const priceData = [
	{
		id:1,
		title: "Basic",
		icon:	coins,
		price: "від 20 000грн",
		timeIcon: time,
		time: "2-3 тижні",
		features: [
			"Повністю самописний односторінковий сайт",
			"Унікальний дизайн ",
			"Чистий та оптимізований код",
			"Адаптивність (ПК + мобайл)",
			"Базова SEO-оптимізація",
		],
		buttonText: "Замовити",
		buttonLink: "#",
		buyIcon:	buy,
		height: 'h-[436px]'
	},
	{
		id:2,
		title: "Standart",
		icon:	coins,
		price: "від 35 000 грн",
		timeIcon: time,
		time: "4-6 тижні",
		features: [
			"3–6 сторінок ",
			"Самописна адмінка / CMS (мінімальний функціонал)",
			"Адаптивний дизайн",
			"Інтеграція форм, аналітики",
		],
		buttonText: "Замовити",
		buttonLink: "#",
		buyIcon:	buy,
		height: 'h-[436px]'
	},
	{
		id:3,
		title: "Premium",
		icon:	coins,
		price: "від 65 000 грн",
		timeIcon: time,
		time: "2-3 місяці",
		features: [
			"Самописний каталог товарів",
			"Кошик + система замовлень",
			"Інтеграція онлайн-оплати та доставки",
			"Адмінка для управління контентом",
			"Адаптивність і SEO",
		],
		buttonText: "Замовити",
		buttonLink: "#",
		buyIcon:	buy,
		height: 'h-[436px]'
	},
	{
		id:4,
		title: "Лого/брендинг",
		icon:	coins,
		price: "від 7 000 грн",
		features: [
			"Логотип, айдентика та кольорова палітра",
			"Брендбук/гайдлайн (за потреби)",
			"Варіанти для друку й digital",
		],
		buttonText: "Замовити",
		buttonLink: "#",
		buyIcon:	buy,
		height: 'h-[368px]'
	},
	{
		id:5,
		title: "Telegram-бот",
		icon:	coins,
		price: "від 12 000 грн",
		features: [
			"Індивідуальна логіка під ваші задачі",
			"Підтримка кнопок, форм та сценаріїв",
			"Збереження даних у базу (наприклад, Supabase)",
			"Адаптивність під мобільний UX",
		],
		buttonText: "Замовити",
		buttonLink: "#",
		buyIcon:	buy,
		height: 'h-[368px]'
	},
	{
		id:6,
		title: "Підтримка сайту",
		icon:	coins,
		price: "від 5 000 грн/місяць",
		features: [
			"Технічна оптимізація та безпека",
			"Моніторинг швидкодії",
			"Виправлення помилок та дрібні доробки",
			"Постійний супровід вашого проєкту",
		],
		buttonText: "Замовити",
		buttonLink: "#",
		buyIcon:	buy,
		height: 'h-[368px]'
	},
	
]