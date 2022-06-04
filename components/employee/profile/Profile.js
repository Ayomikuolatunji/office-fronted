/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import Role from '../../../components/profile-components/UpdateRole';
import ProfilePicture from '../../../components/profile-components/UpdatePofilePicture';
import UpdateEmail from '../../../components/profile-components/UpdateEmail';
import UpdateName from '../../../components/profile-components/UpdateName';
import AboutUpdate from '../../../components/profile-components/AboutUpdate';
import { Settings, Setter, UserSettings, ImgSettings, Data } from 'styled-compnent/Settings';
import TextField from '@mui/material/TextField';
import { Edit } from '@mui/icons-material';


export default function Profile() {
	const employeeData = useSelector((state) => state.employeeInfo.employeeData);
	console.log(employeeData);

	return (
		<ProfileContainer>
			<Settings>
				<UserSettings>
					<div className="user-settings">
						<div className="profile">
							<h3>Profile</h3>
						</div>
						<ImgSettings>
							<div className="img-container">
								<img src={employeeData.avartImage} alt="user-image" />
							</div>

							<div className="buttons">
								<button type="button" className="button change">
									Change Picture
								</button>
								<button type="button" className="button delete">
									Delete Picture
								</button>
							</div>
						</ImgSettings>
					</div>

					<Data>
						<div className="control">
							<UpdateName
							  employeeData={employeeData}
							/>
							<div className="form-control">
								<label htmlFor="lastname">Last name : </label>
								<Edit className="icon" />
								<TextField id="lastname" 
                                variant="outlined" fullWidth 
                                name='lastname'
                                />
							</div>
						</div>

						<div className="control">
							<div className="form-control">
								<label htmlFor="role">Your Role : </label>
								<Edit className="icon" />
								<TextField id="role" 
                                variant="outlined" fullWidth name='role'/>
							</div>

							<div className="form-control">
								<label htmlFor="email">Your Email : </label>
								<Edit className="icon" />
								<TextField 
                                id="email" 
                                variant="outlined" fullWidth 
                                name='email'
                                />
							</div>
						</div>

						<div className="form-control">
							<label htmlFor="Bio" className='block'>Bio : </label>
							{/* <Edit className="inline" /> */}
							<textarea minLength="4em" className='h-16 w-6/12 pl-2'/>
						</div>
					</Data>
				</UserSettings>
			</Settings>
		</ProfileContainer>
	);
}

const ProfileContainer = styled.div`
	display: block;
	width: 100%;
`;
