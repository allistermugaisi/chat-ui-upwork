let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('#btn');
let chatlist = document.querySelector('.chatlist-items');
let chatItem = document.querySelector('.chat-items');

closeBtn.addEventListener('click', () => {
	sidebar.classList.toggle('open');
	menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
	if (sidebar.classList.contains('open')) {
		closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
	} else {
		closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
	}
}

const allChatUsers = [
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
		id: 1,
		name: 'Hero Alom',
		active: '',
		isOnline: 'active',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image:
			'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
		id: 2,
		name: 'Kevin Peterson',
		active: '',
		isOnline: 'online',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
		id: 3,
		name: 'Jason Roy',
		active: 'active',
		isOnline: 'online',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU',
		id: 4,
		name: 'Peterson song',
		active: '',
		isOnline: 'active',
		message: 'Can you please send me',
		time: '02:19pm answered by bot',
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU',
		id: 5,
		name: 'Kevin Robat',
		active: '',
		isOnline: 'online',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image:
			'https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png',
		id: 6,
		name: 'Lisa Romi',
		active: '',
		isOnline: 'active',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image:
			'https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png',
		id: 7,
		name: 'John Mcculloch',
		active: '',
		isOnline: 'active',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU',
		id: 9,
		name: 'Allan Woodley',
		active: '',
		isOnline: 'active',
		message: 'Can you please send me',
		time: '02:19pm',
	},
	{
		image: 'https://pbs.twimg.com/profile_images/770394499/female.png',
		id: 10,
		name: 'David Prect',
		active: '',
		isOnline: 'active',
		message: 'Can you please send me',
		time: '02:19pm',
	},
];

chatlist.innerHTML = allChatUsers
	.map((chat) => {
		const { name, message, image, active, isOnline, time } = chat;
		return `<div onclick='selectChat()' class="chatlist-item ${active}">
					<div class="avatar">
						<div class="avatar-img">
							<img src=${image} alt="profile-img" />
						</div>
						<span class="isOnline ${isOnline}"></span>
					</div>
					<div class="userMeta">
						<p>${name}</p>
						<p>${message}</p>
						<span class="activeTime">${time}</span>
					</div>
				</div>`;
	})
	.join('');

const selectChat = (event) => {
	let e = event;
	for (
		let index = 0;
		index < e.currentTarget.parentNode.children.length;
		index++
	) {
		e.currentTarget.parentNode.children[index].classList.remove('active');
	}
	e.currentTarget.classList.add('active');
};

const chatItems = [
	{
		key: 1,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
		type: 'other',
		msg: 'Hi Tim, How are you?',
		time: '9 min ago',
	},
	{
		key: 2,
		image:
			'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
		type: '',
		msg: 'I am fine.',
		time: '10 min ago',
	},
	{
		key: 3,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
		type: 'other',
		msg: 'What about you?',
		time: '12 min ago',
	},
	{
		key: 4,
		image:
			'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
		type: '',
		msg: 'Awesome these days.',
		time: '7 min ago',
	},
	{
		key: 5,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
		type: 'other',
		msg: "Finally. What's the plan?",
		time: '8 min ago',
	},
	{
		key: 6,
		image:
			'https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg',
		type: '',
		msg: 'what plan mate?',
		time: '6 min ago',
	},
	{
		key: 7,
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU',
		type: 'other',
		msg: "I'm taliking about the tutorial",
		time: '5 min ago',
	},
];

chatItem.innerHTML = chatItems
	.map((item) => {
		const { image, type, msg, time } = item;
		return `<div style=" animationDelay: 0.8s;" class="chat__item ${type}">
					<div class="chat__item__content">
						<div class="chat__msg">${msg}</div>
						<audio controls preload="metadata">
							<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/ogg">
						</audio>
						<div class="chat__meta">
							<span>${time}</span>
							<i class='bx bx-check'></i>
						</div>
					</div>
					<div class="avatar">
						<div class="avatar-img">
							<img src=${image} alt="profile-img" />
						</div>
						<span class='isOnline active'></span>
					</div>
			</div>`;
	})
	.join('');
