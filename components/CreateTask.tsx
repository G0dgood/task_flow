"use client"
import Modal from 'react-bootstrap/Modal';
import { InputField } from './TableOptions';
import ModalHeader from './ModalHeader';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';



import { Form } from 'react-bootstrap';


const CreateTask = () => {

	const [showTask, setShowTask] = useState(false)

	const [input, setInput] = useState({
		title: "",
		taskStatus: "NEW",
		description: "",
		dueDate: "",
		priority: "",
	})
	const [severityStyle, setSeverityStyle] = useState<any>({
		background: "transparent",
		width: "0%",
	});





	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Convert the expiryDate to ISO format using convertToISOString

		// @ts-ignore
		dispatch(createTask(input));
	}

	const handleClose = () => setShowTask(false);


	const handleOnChange = (input: any, value: any) => {
		setInput((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};

	useEffect(() => {
		if (input.priority === "LOW") {
			setSeverityStyle(() => ({
				background: "#FFA726",
				width: "25%",
			}));
		} else if (input.priority === "MEDIUM") {
			setSeverityStyle(() => ({
				background: "#00B894",
				width: "50%",
			}));
		} else if (input.priority === "HIGH") {
			setSeverityStyle(() => ({
				background: "red",
				width: "100%",
			}));
		} else {
			setSeverityStyle(() => ({
				background: "#eee9fd",
				width: "100%",
			}));
		}
	}, [input.priority]);


	return (
		<>
			<div className="profilex_second_con_text_one" onClick={() => setShowTask(!showTask)}>
				<AddIcon />
				<p>New</p>
			</div>
			<Modal show={showTask} onHide={handleClose} centered>
				<ModalHeader setShow={setShowTask} headerTitle={"Create Task"} />
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<InputField label={"Title"} placeholder={"Design new draft"} className={"mb-4"}
							value={input.title}
							onChange={(e: any) => handleOnChange("title", e.target.value)} />


						<div className='flex-date-input mb-4'>
							<InputField label={"Due date"} type={"date"} className={"100%"}
								value={input.dueDate}
								onChange={(e: any) => handleOnChange("dueDate", e.target.value)} />

						</div>
						<div className={"input"}>
							<label htmlFor="severity" className={"input__label"} >Priority</label>
							<select name="priority" value={input.priority} onChange={(e: any) => handleOnChange("priority", e.target.value)}  >
								<option value="">Select priority</option>
								<option value="LOW">Low</option>
								<option value="MEDIUM">Medium</option>
								<option value="HIGH">High</option>
							</select>
						</div>

						<label htmlFor="severity" style={{ display: "flex", marginBottom: "20px" }} className={"input__label"}>
							Severity
							<span
								style={{
									backgroundColor: severityStyle.background,
									width: severityStyle.width,
									height: 7,
									marginLeft: 7.5,
									borderRadius: 5,
									alignSelf: "center",
									transition: "all .75s",
								}}
							/>
						</label>
						<textarea
							name="message"
							id="message-textarea"
							value={input.description}
							onChange={(e: any) => handleOnChange("description", e.target.value)}
							placeholder="description..."
							rows={4} // Adjust the number of rows as needed
						/>
						<button id='custom-btn' className='mt-4'   > Create </button>
					</Form>
				</Modal.Body>
			</Modal >
		</>
	);
}

export default CreateTask;
