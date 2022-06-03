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
				<Setter>
					<div className="settings-overlap">
						<h3>Settings</h3>
						<div className="underline" />
					</div>

                    {/* List of User Settings   
                    on the left hand side 
                     e.g, Profile, Account, Preferences i.e change of bg, color etc
                    */}
				</Setter>

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
							<div className="form-control">
								<label htmlFor="firstname" className="d-block">
									First name :
								</label>
								<Edit className="icon" />
								<TextField id="firstname" 
                                variant="outlined" fullWidth />
							</div>
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
			{/* <div className="general flex flex-col w-[40%] border-1 border-gray shadow-md mt-14"> */}
			{/* profile picture */}
			{/* <ProfilePicture employeeData={employeeData}/> */}
			{/*role */}
			{/* <Role employeeData={employeeData}/> */}
			{/* name */}
			{/* <UpdateName employeeData={employeeData}/> */}
			{/* email */}
			{/* <UpdateEmail employeeData={employeeData}/> */}
			{/* </div> */}
			{/* <div className="about w-[60%] bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <CgProfile className='text-4xl'/>
                <span className="tracking-wide">Other Info</span>
            </div>
            <AboutUpdate employeeData={employeeData}/>
           <div className="username mt-6 bg-white p-3">
              <h5 className='text-blue-400'>Current location</h5>
              <div className='flex justify-between items-center pt-2'> 
                  <h6>{employeeData?.address}</h6>
                  <FiEdit className='text-2xl cursor-pointer '/>
              </div>
           </div>
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex items-center font-semibold text-gray-900 leading-8 mb-3 ml-4">
                        <span className="tracking-wide">Companies</span>
                    </div>
                    <ul className="list-inside space-y-2">
                        <li>
                            <div className="text-blue-500">Owner at Her Company Inc.</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-insid ">
                        <li>
                            <div className="text-blue-500">Masters Degree in Oxford</div>
                            <div className="text-gray-500 text-xs">March 2020 - Now</div>
                        </li>
                    </ul>
                </div>
            </div>
         </div> */}
		</ProfileContainer>
	);
}

const ProfileContainer = styled.div`
	display: block;
	width: 100%;
	height: calc(100vh - 8rem);
	background-color: #dcdbe4;
`;
