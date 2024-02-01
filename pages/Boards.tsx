"use client"
import { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Image from 'next/image';
import label from '../public/ic_round-red.svg'
import label1 from '../public/ic_round-yellow.svg'
import label2 from '../public/ic_round-green.svg'
import timer from '../public/mdi_timer.svg'
import chat from '../public/fluent_chat-24-filled.svg'
import filex from '../public/file_present.svg'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import plusx from "../public/plus 6.svg"
import profile_1 from "../public/Avatar_1.svg"
import profile_2 from "../public/Avatar (1).svg"
import profile_3 from "../public/Avatar (2).svg"

const Boards = () => {




	const [tasksData, setTasksData] = useState([
		{
			id: 1,
			title: 'Project X dashboard UI prototype',
			description: 'Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management...',
			date: '11th  - 15th August 2023',
			assignee: 'Ugent',
			status: 'new',
			label: label,
			sub: "Ongoing",
		},
		{
			id: 2,
			title: 'Project X dashboard UI prototype',
			description: 'Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management...',
			date: '11th  - 15th August 2023',
			assignee: 'Alice',
			status: 'new',
			label: label1,
			sub: "To Do",
		},
		{
			id: 4,
			title: 'Project X dashboard UI prototype',
			description: 'Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management...',
			date: '11th  - 15th August 2023',
			assignee: 'Charlie',
			status: 'working',
			label: label2,
			sub: "Done",
		},
		{
			id: 6,
			title: 'Project X dashboard UI prototype',
			description: 'Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management...',
			date: '11th  - 15th August 2023',
			assignee: 'David',
			status: 'completed',
			label: label1,
			sub: "To Do",
		},
		{
			id: 7,
			title: 'Project X dashboard UI prototype',
			description: 'Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management...',
			date: '11th  - 15th August 2023',
			assignee: 'David',
			status: 'completed',
			label: label2,
			sub: "Done",
		},
		{
			id: 9,
			title: 'Project X dashboard UI prototype',
			description: 'Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management...',
			date: '11th  - 15th August 2023',
			assignee: 'David',
			status: 'completed',
			label: label2,
			sub: "Done",
		},
	]);

	const handleDragStart = (e: any, id: any) => {
		e.dataTransfer.setData('text/plain', id);
	};

	const handleDragOver = (e: any) => {
		e.preventDefault();
	};

	const handleDrop = (e: any, targetStatus: any) => {
		e.preventDefault();

		const draggedTaskId = e.dataTransfer.getData('text/plain');
		const updatedTasks = tasksData.map((task) =>
			task.id.toString() === draggedTaskId ? { ...task, status: targetStatus } : task
		);

		setTasksData(updatedTasks);
	};

	const renderTasks = (status: any) => {
		const filteredTasks = tasksData.filter((task) => task.status === status);

		return (
			<div
				className="tasks-board-container"
				onDragOver={handleDragOver}
				onDrop={(e) => handleDrop(e, status)}
			>
				<section>
					<div className={`day_task_${status === 'new' ? '1' : status === 'working' ? '2' : '3'}`}>
						<div className="day_task_1_sub">
							<h3>{status === 'new' ? "Today’s Tasks" : status === 'working' ? "Upcoming tasks" : "Completed tasks"}</h3>
							<div className="day_task_number">{filteredTasks.length}</div>
						</div>
						<AddCircleIcon className="AddCircleIcon" fontSize="large" />
					</div>
				</section>
				<div className='tasks-board-scroll-container'>
					{filteredTasks.map((task) => (
						<div
							key={task.id}
							className="tasks-board-container-sup-card"
							draggable
							onDragStart={(e) => handleDragStart(e, task.id)}
						>

							<div className="profilex_second_ui">
								<div className='profilex_second_ui_sup'>
									<div className='profilex_second_ui_sup1'>
										<Image src={task.label} alt='lable' />
										<h3 className='profilex_second_ui_sup1_text'>{task.title}</h3>
									</div>
									<div className={task.sub === "Ongoing"
										? "profilex_second_ui_dropdown"
										: task.sub === "To Do"
											? "profilex_second_ui_dropdown1"
											: task.sub === "Done"
												? "profilex_second_ui_dropdown2"
												: ""}>
										<p className={
											task.sub === "Ongoing"
												? "profilex_second_ui_dropdown_p"
												: task.sub === "To Do"
													? "profilex_second_ui_dropdown_p1"
													: task.sub === "Done"
														? "profilex_second_ui_dropdown_p2"
														: ""
										}>{task.sub}</p>

										<ArrowDropDownSharpIcon className={
											task.sub === "Ongoing"
												? "profilex_ui_p"
												: task.sub === "To Do"
													? "profilex_ui_p1"
													: task.sub === "Done"
														? "profilex_ui_p2"
														: ""
										} />
									</div>
								</div>
								<div className='profilex_second_ui_center_text'>{task.description}</div>
								<div>
									<div className='profilex_timer'>
										<Image src={timer} alt='timer' />
										<p className='profilex_timer_p'>Deadline</p>
										<p className='profilex_timer_pro'>:{task.date}</p>
									</div>
									<div className='profilex_timer_buttom'>
										<div className='profilex_timer_buttom1'>
											<div className='profilex_timer_buttom_img'>
												<div className='img_profilex'><Image src={profile_1} alt='file' /></div>
												<div className='img_profilex1'><Image src={profile_2} alt='file' /></div>
												<div className='img_profilex2'><Image src={profile_3} alt='file' /></div>
												<div className='img_pro_text'>+1</div>
											</div>
											<Image src={plusx} alt='plusx' />
										</div>

										<div className='profilex_timer_buttom2'>
											<div className='profilex_timer_buttom2_text'>	<Image src={filex} alt='file' /><span className='profilex_timer_chat_text'> 2</span></div>
											<div className='profilex_timer_buttom2_text'>	<Image src={chat} alt='chat' /><span className='profilex_timer_chat_text'> 3</span></div>
										</div>
									</div>
								</div>
							</div>

						</div>
					))}
				</div>
			</div>
		);
	};

	return (

		<div  >
			<div className="tasks-board-items-container  ">
				{renderTasks('new')}
				{renderTasks('working')}
				{renderTasks('completed')}
			</div>
		</div>
	)
}

export default Boards



