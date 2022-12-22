import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profileImage from '../assets/profile.jpeg'
import FlexBetween from "./FlexBetween";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />,
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />,
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
];

const Sidebar = ({
                     user,
                     drawerWidth,
                     isSidebarOpen,
                     setIsSidebarOpen,
                     isNonMobile,
                 }) => {
    const [active, setActive] = useState('')
    const navigate = useNavigate()
    const theme = useTheme()
    const {pathname} = useLocation()

    useEffect(() => {
         setActive(pathname.substring(1))
    }, [pathname])

    return (
        <Box component={'nav'}>
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={()=>setIsSidebarOpen(false)}
                    variant={'persistent'}
                    anchor={'left'}
                    sx={{
                      width: drawerWidth,
                      '& .MuiDrawer-paper': {
                          color: theme.palette.secondary[200],
                          backgroundColor: theme.palette.background.alt,
                          borderWidth: isNonMobile ? 0 : '2px',
                          width: drawerWidth
                      }
                    }}
                >
                    <Box width={'100%'}>
                        <Box m={'1.5rem 2rem 2rem 3rem'}>
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display={'flex'} alignItems={'center'} gap={'0.5rem'}>
                                    <Typography variant={'h4'} fontWeight={'bold'}>
                                        ECOMVISION
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems?.map((item, index) => {
                                if(!item.icon){
                                   return (
                                       <Typography key={index} sx={{m: '2.25rem 0 1rem 3rem'}}>
                                           {item.text}
                                       </Typography>
                                   )
                                }
                                const lcText = item.text.toLowerCase()
                                return (
                                    <ListItem key={index} disablePadding>
                                       <ListItemButton
                                           sx={{
                                               backgroundColor:
                                                   active === lcText
                                                       ? theme.palette.secondary[300]
                                                       : "transparent",
                                               color:
                                                   active === lcText
                                                       ? theme.palette.primary[600]
                                                       : theme.palette.secondary[100],
                                           }}
                                           onClick={() => {navigate(`/${lcText}`);
                                               setActive(lcText)
                                           }}

                                       >
                                          <ListItemIcon
                                              sx={{
                                                  ml: '2rem',
                                                  color: active === lcText ? theme.palette.primary[600] : theme.palette.primary[100]
                                              }}
                                          >
                                              {item.icon}
                                          </ListItemIcon>
                                           <ListItemText primary={item.text}>
                                               {active === lcText && (
                                                   <ChevronRightOutlined sx={{ml: 'auto'}}/>
                                               )}
                                           </ListItemText>
                                       </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Box position={'absolute'} bottom={'2rem'}>
                       <Divider/>
                        <FlexBetween
                            gap={'1rem'}
                            m={'1.5rem 2rem 0 3rem'}
                            textTransform={'none'}>
                            <Box
                                component={'img'}
                                alt={'profile'}
                                src={profileImage}
                                height={'40px'}
                                width={'40px'}
                                borderRadius={'50%'}
                                sx={{
                                    objectFit: 'cover'
                                }}
                            />
                            <Box textAlign={'left'}>
                                <Typography
                                    fontWeight={'bold'}
                                    fontSize={'0.9rem'}
                                    sx={{color: theme.palette.secondary[100]}}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize={'0.8rem'}
                                    sx={{color: theme.palette.secondary[200]}}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <SettingsOutlined
                                sx={{color: theme.palette.secondary[300], fontSize: '25px'}}
                            />
                        </FlexBetween>
                    </Box>
                </Drawer>


            )}
        </Box>
    );
};

export default Sidebar;
