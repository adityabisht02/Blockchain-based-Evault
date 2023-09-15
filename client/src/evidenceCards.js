import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import evidenceData from './evidenceData.json';
import './EvidenceCards.scss';

function EvidenceCards() {
  return (
    <div className="evidence-container">
      {evidenceData.map((evidence) => (
        <Card key={evidence.id} className="evidence-card">
          <CardMedia 
            style={{width: '100%', height: 'auto'}}
            component="img"
            alt={evidence.name}
            src={evidence.imageUri}
            onClick={() => window.open(evidence.imageUri, '_blank')}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {evidence.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {evidence.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default EvidenceCards;