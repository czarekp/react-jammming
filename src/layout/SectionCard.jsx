import { Card, CardBody } from '@chakra-ui/react'

export const SectionCard = ({ children }) => {
  return (
    <Card boxShadow="none" background="none">
      <CardBody border="1px solid limegreen" borderRadius="lg" color="white">
        {children}
      </CardBody>
    </Card>
  )
}
