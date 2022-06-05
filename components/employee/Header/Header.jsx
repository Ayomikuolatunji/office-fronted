import React, { useState } from 'react';
import { Avatar, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Link from 'next/link';
import { FaVideo } from 'react-icons/fa';
import { RiUserSettingsFill } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';


export const Header = () => {
	const employeeData=useSelector(state=>state.employeeInfo.employeeData)
	const [ search, setSearch ] = useState('');

	const HandleSubmit = (ev) => {
		ev.preventDefault();
	};

	const Icons=[
		{
		   icon:<FaVideo 
		   className="Link mr-[1.5em] text-[1.3em] text-[#fff] text-center relative cursor-pointer " 
		   />,
		   link:"#"	
		},
		{
			icon:<RiUserSettingsFill  className="Link mr-[1.5em] text-[1.3em] text-[#fff] text-center relative cursor-pointer " />,
			link:"#"
		},{
			icon:<IoIosNotificationsOutline  className="Link mr-[1.5em] text-[1.3em] text-[#fff] text-center relative cursor-pointer " />,
			link:"#"
		}
	]

	return (
		<div className='w-[100%] relative block bg-[#536c7c]'>
			<div className='relative w-[100%] h-[inherent]'>
				<main className='block w-[100%] h-[inherent]'>
					<div className='w-[95%] m-auto pb-[0.45em] pt-[0.45em] flex justify-between items-center'>
						<div className="logo">
							<Stack direction="row">
								<Avatar sx={{ bgcolor: deepPurple[500] }} src={employeeData?.avartImage} />
							</Stack>
						</div>

						<div className="w-[50%] mx-auto">
							<form onSubmit={HandleSubmit} className="flex items-center justify-between text-[#fff]">
								<TextField
									className='py-[0.65em] px-[0.75em]'
									sx={{ width: '100%', marginRight: '1em', marginLeft : "0.45em", borderColor : "white" }}
									type="search"
									variant="outlined"
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									fullWidth
									color="primary"
								/>
								<button type="submit">
									<BsSearch />
								</button>
							</form>
						</div>

						<div className="ml-auto mr-[1rem] flex justify-between ">
							{/* Check console for some errors */}
							{
								Icons.map((icon,index)=>{
									return (
										<Link key={index} href={icon.link}>
											{icon.icon}
										</Link>
									)
								})
							}
						</div>

						<div className='mr-[1.5em] relative'>
							<Stack direction="row">
								<Avatar sx={{ bgcolor: deepPurple[500] }}>O</Avatar>
							</Stack>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};



