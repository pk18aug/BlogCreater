import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { AddBox, CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import ChannelDetails from './ChannelDetails';

export default function ChannelCard() {


    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',


        }}>
            <Link to={`/channel/${ChannelDetails?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'center', justifyContent: 'center', textAlign: 'center', color: "#fff" }}>
                    <CardMedia
                        image={ChannelDetails?.snippet?.thumbnail?.high?.url || demoProfilePicture}
                        alt={ChannelDetails?.snippet?.title}
                        sx={{
                            borderRadius: '50%', height: '180px',
                            width: '180px', mb: 2, border: '1px solid #e3e3e3'
                        }} />
                    <Typography variant='h6'>
                        {ChannelDetails?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }}></CheckCircle>
                    </Typography>
                    {ChannelDetails?.statistics?.subscriberCount && (
                        <Typography >
                            {parseInt(ChannelDetails?.statistics?.subscriberCount).toLocaleString()}
                            Subscribers</Typography>
                    )}
                </CardContent>

            </Link>
        </Box>
    )
}
