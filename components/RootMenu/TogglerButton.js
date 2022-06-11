import Button from '@mui/material/Button';

export const TogglerNav = ()=> {
    return (
      <nav className={`relative block h-full w-full`}>
        <ul className={`justify-between fixed h-inherit w-inherit top-1 bg-slate-500`}>
          <li>
            <Button href = "https://www.google.com">As Admin</Button>
          </li>

          <li>
            <Button href = "#Employee">As Employee</Button>
          </li>
        </ul>
      </nav>
    )
}