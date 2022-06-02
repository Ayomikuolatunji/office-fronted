/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { VscSignOut } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logoutEmployee } from '../../../redux/auth/employeSlice';
import { employeeCompanies } from '../../../helpers/employeeCompanies';

export default function Sidebar() {
	const isLoggedIn = useSelector((state) => state.employeeAuth.isLoggedIn);
	const dispatch = useDispatch();
	const router = useRouter();

  console.log(logoutEmployee())

	useEffect(
		() => {
			if (!isLoggedIn) {
				router.push('/login');
			}
		},
		[ router, isLoggedIn ]
	);

	const LogoutFunc = () => {
		if (isLoggedIn) {
			router.push('/login');
			dispatch(logoutEmployee());
		}
	};
	return (
		<SidebaarDiv>
			<div className="flex flex-col justify-center items-center">
        <div className='block'>Online Office</div>
				<ul className="">
					<span className="">
						<span className="">Onlineoffice</span>
					</span>
					<li>
						<span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							<svg
								className=""
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
								<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
							</svg>
							<span className="">Dashboard</span>
						</span>
					</li>
					{employeeCompanies.map((company, index) => {
            console.log(company.item)
						return (
							<li
								key={index}
								className=""
							>
								<Link href={company.route}>{company.item}</Link>
							</li>
						);
					})}
					<li>
						<span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							<svg
								className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
								<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
							</svg>
							<Link href={'/employee-dashboard/inbox'} className="flex-1 ml-3 whitespace-nowrap">
								Inbox
							</Link>
							<span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
								3
							</span>
						</span>
					</li>
					<li>
						<span
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
							onClick={() => LogoutFunc()}
						>
							<VscSignOut className="text-2xl" />
							<span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
						</span>
					</li>
				</ul>
			</div>
		</SidebaarDiv>
	);
}

const SidebaarDiv = styled.div`
	height: 100vh;
	position: fixed;
	background-color: #9da9a0;
	box-shadow: 1px 2px #bdb4bf;
`;
