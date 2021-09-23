import { Box, Container, Typography } from "@material-ui/core";
import BaseLayout from "layouts/BaseLayout";
import React from "react";

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <Container>
        <Box
          color="#fff"
          minHeight="60vh"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography component="h1" variant="h1" color="primary" gutterBottom>
            404 Page Not found
          </Typography>
          <Typography component="p" variant="body1" color="secondary">
            Looks like the page you are looking for is not available. Please
            check the url carefully.
          </Typography>
        </Box>
      </Container>
    </BaseLayout>
  );
};

export default NotFoundPage;
