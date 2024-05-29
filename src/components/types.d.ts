interface Props extends React.HTMLProps<HTMLDivElement> {

}


type TSidebarItem = {
  key: number
  open: boolean
}

type MenuItem = {
  title: string
  spacing?: boolean
  icon?: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
  submenu?: boolean
  submenuItems?: MenuItem[]
} 

type SidebarProps = TSidebarItem & MenuItem

