import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  reason: string;
  company?: string;
}

export const ContactEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  reason,
  company,
}) => (
  <div style={container}>
    <h1 style={header}>
      📧 Nuevo mensaje de contacto desde tu portfolio
    </h1>
    
    <div style={infoBox}>
      <h2 style={infoHeader}>Información del remitente:</h2>
      <p style={infoItem}><strong>Nombre:</strong> {name}</p>
      <p style={infoItem}><strong>Email:</strong> <a href={`mailto:${email}`} style={emailLink}>{email}</a></p>
      {company && <p style={infoItem}><strong>Empresa:</strong> {company}</p>}
      <p style={infoItem}><strong>Motivo:</strong> {reason}</p>
    </div>

    <div style={messageBox}>
      <h3 style={messageHeader}>Mensaje:</h3>
      <p style={messageContent}>{message}</p>
    </div>

    <hr style={divider} />
    
    <div style={footer}>
      <p style={block}>
        Para responder, simplemente haz clic en "Responder" - el email se enviará directamente a <strong>{email}</strong>
      </p>
      <p style={block}>
        <small>Este email fue enviado desde el formulario de contacto de tu portfolio.</small>
      </p>
    </div>
  </div>
);

const block: React.CSSProperties = {
  display: 'block',
  margin: '0.5rem 0',
};

const container: React.CSSProperties = {
  textAlign: 'left',
  padding: '2rem',
  margin: '1rem',
  border: '1px solid #e1e5e9',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
  maxWidth: '600px',
  lineHeight: '1.5',
};

const header: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#0969da',
  marginBottom: '1.5rem',
  textAlign: 'center',
};

const infoBox: React.CSSProperties = {
  backgroundColor: '#f6f8fa',
  padding: '1.5rem',
  borderRadius: '6px',
  border: '1px solid #d1d9e0',
  marginBottom: '1.5rem',
};

const infoHeader: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#24292e',
  marginBottom: '1rem',
  marginTop: '0',
};

const infoItem: React.CSSProperties = {
  margin: '0.5rem 0',
  fontSize: '1rem',
};

const emailLink: React.CSSProperties = {
  color: '#0969da',
  textDecoration: 'none',
  fontWeight: '500',
};

const messageBox: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '1.5rem',
  borderRadius: '6px',
  border: '2px solid #0969da',
  borderLeft: '4px solid #0969da',
  marginBottom: '1.5rem',
};

const messageHeader: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#24292e',
  marginTop: '0',
  marginBottom: '1rem',
};

const messageContent: React.CSSProperties = {
  fontSize: '1rem',
  color: '#24292e',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap',
  margin: '0',
};

const divider: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #d1d9e0',
  margin: '1.5rem 0',
};

const footer: React.CSSProperties = {
  fontSize: '0.9rem',
  color: '#656d76',
};
