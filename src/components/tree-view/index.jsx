import MenuList from "./menu-list";
import "./styles.css"

export default function TreeView({menus = []}) {

  return (
    <div className="tree-view-cont">
      <MenuList list={menus} />

    </div>
  )

}