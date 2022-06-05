/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect } from 'react';
import {MdMoveToInbox} from "react-icons/md"
import { VscSignOut } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutEmployee } from '../redux/auth/employeSlice';
import { employeeCompanies } from '../helpers/employeeCompanies';

export default function Sidebar() {
	const isLoggedIn = useSelector((state) => state.employeeAuth.isLoggedIn);
	const dispatch = useDispatch();
	const router = useRouter();


	useEffect(() => {
			if (!isLoggedIn) {
				router.push('/login');
			}
		},[ router, isLoggedIn ]);

	const LogoutFunc = () => {
		if (isLoggedIn) {
			router.push('/login');
			dispatch(logoutEmployee());
		}
	};
	return (
		<div className='w-[100%] h-[100%] mb-[1rem]'>
			<div className='flex justify-between flex-col h-[100%] relative items-center '>
				<div className="block w-[100%] border-[1px] border-[#E0E0E0]">
					<h5 className='text-center text[1em] p-[1em]'>Online Office</h5>
				</div>
	            
				<div className='-mt-[250px]'>
				    {employeeCompanies.map((company, index) => {
						console.log(company.item);
						return (
							<li key={index} className="mb-10 no-underline">
								<Link href={company.route}>
									<a className='text-white'>
									{company.item}
									</a>
								</Link>
							</li>
						);
					})}
					<li className="inbox flex text-[1em] py-[0.45em]">
						<MdMoveToInbox className='text-2xl inline text-[white]'/>
						<Link href={'/employee-dashboard/inbox'}>
							 <a className='text-[#f1f5f8] pl-[0.45em]'>Inbox</a>
						</Link>
						<span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
							3
						</span>
					</li>
				</div>
				<div className="text-[#F1F5F8] py-[0.45em] px-[0.75em] text-[1rem] w-[70%] z-[2] my-[0] mx-auto">
					<span className="flex items-center justify-around p-[0.45em] rounded-[1.7em] transition-[background] duration-[.25] hover:bg-[black]" onClick={() => LogoutFunc()}>
						<VscSignOut className="display-block" />
						<span className='block'>Logout</span>
					</span>
			    </div>
			</div>
		</div>
	);
}

