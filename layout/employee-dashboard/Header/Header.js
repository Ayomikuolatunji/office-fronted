import React, { useState } from 'react';
import { Avatar, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Link from 'next/link';
import { FaVideo } from 'react-icons/fa';
import { RiUserSettingsFill } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { HeaderPage, InnerPage, Communication, Profile } from '../../../styled-compnent/Header';

export const Header = () => {
	const [ search, setSearch ] = useState('');

	const HandleSubmit = (ev) => {
		ev.preventDefault();
	};

	return (
		<HeaderPage>
			<InnerPage>
				<main>
					<header>
						<div className="logo">
							<Stack direction="row">
								<Avatar sx={{ bgcolor: deepPurple[500] }} src="../../../public/images/Logo.jpg" />
							</Stack>
						</div>

						<div className="formContainer">
							<form onSubmit={HandleSubmit}>
								<TextField
									id="form2"
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

						<Communication>
							{/* Check console for some errors */}

							<Link href={'https://www.google.com'}>
								<FaVideo className="Link" />
							</Link>

							<Link href={'https://www.google.com'}>
								<RiUserSettingsFill className="Link" />
							</Link>

							<Link href={'https://www.google.com'}>
								<IoIosNotificationsOutline className="Link" />
							</Link>
							{/* <span className="absolute-not">0</span> */}
						</Communication>

						<Profile>
							<Stack direction="row">
								<Avatar sx={{ bgcolor: deepPurple[500] }}>O</Avatar>
							</Stack>
						</Profile>
					</header>
				</main>
			</InnerPage>
		</HeaderPage>
	);
};
