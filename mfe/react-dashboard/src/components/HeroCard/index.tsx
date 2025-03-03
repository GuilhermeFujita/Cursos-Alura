import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VisaoGeral from '../../assets/visao-geral.png';

const HeroCard = () => {
  return (
    <Card sx={{ background: '#fff3e0' }}>
      <CardContent>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box>
            <Typography>Olá, usuário!</Typography>
            <Typography>
              Confira as informações da sua casa inteligente!
            </Typography>
          </Box>
          <img src={VisaoGeral} alt="Visão Geral" height={180} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
