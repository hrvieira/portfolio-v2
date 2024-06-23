import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface Props {
    window?: () => Window;
}

interface NavItem {
    to: string;
    label: string;
}

const navItemsDesktop: NavItem[] = [
    { to: "/projetos", label: "Projetos" },
    { to: "/sobremim", label: "Sobre mim" },
    { to: "/contato", label: "Contato" },
];

const navItemsMobile: NavItem[] = [
    { to: "/", label: "Início" },
    { to: "/projetos", label: "Projetos" },
    { to: "/sobremim", label: "Sobre mim" },
    { to: "/contato", label: "Contato" },
];

const NavBar: React.FC<Props> = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center", color: "#fff" }}
        >
            <List className="divide-y divide-gray-400 font-[montserratBold]">
                {navItemsMobile.map((item) => (
                    <ListItem key={item.to} disablePadding>
                        <ListItemButton sx={{ justifyContent: "center" }}>
                            <Link to={item.to}>
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <header className="font-[montserratBold]">
            <Box sx={{ display: "flex" }}>
                <AppBar
                    component="nav"
                    sx={{
                        display: "flex",
                        background: "#000",
                        position: "relative",
                    }}
                >
                    <Toolbar className="flex justify-center">
                        <div className="max-sm:w-[90%] w-[80%] flex items-center justify-between">
                            <Link
                                className="text-[1.5rem] hover:text-gray-300"
                                id="inicio"
                                to="/"
                            >
                                Início
                            </Link>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: "none" } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box
                                className=""
                                sx={{
                                    display: {
                                        xs: "none",
                                        md: "block",
                                    },
                                }}
                            >
                                {navItemsDesktop.map((item) => (
                                    <Button
                                        key={item.to}
                                        sx={{
                                            color: "#fff",
                                            margin: "0px 0px 0px 0px",
                                        }}
                                    >
                                        <Link
                                            className="block normal-case p-2 hover:text-gray-300 font-[montserratBold] text-[1.2rem]"
                                            to={item.to}
                                        >
                                            {item.label}
                                        </Link>
                                    </Button>
                                ))}
                            </Box>
                        </div>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: 300,
                                backgroundColor: "#565656",
                            },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </header>
    );
};

export default NavBar;
