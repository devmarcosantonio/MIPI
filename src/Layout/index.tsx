import Header  from "../components/Header";
import SideBar from "../components/SideBar";


const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex">
            <SideBar />
               
            <main className="flex-1 py-5 px-8">
                <Header />
                {children}
            </main>
        </div>
    );
};

export default Layout;