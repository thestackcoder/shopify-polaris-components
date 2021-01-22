import React, {useState, useCallback} from 'react'
import {Layout, Card, FormLayout, TextField, Banner, Button, Form} from '@shopify/polaris';
import ProductTable from './ProductTable';

export default function SettingForm() {
    const [storeName, setStoreName] = useState('');
    const [email, setEmail] = useState('');
    let [showBanner, setShowBanner] = useState(true);

    const handleSubmit = useCallback((_event) => {
            setEmail('');
            setStoreName('');
            alert('Form Submitted!');
      }, []);

    const handleEmailChange = useCallback(
        (value) => setEmail(value),
        [],
    );

    const handleStoreNameChange = useCallback(
        (value) => setStoreName(value),
        []
    );
        
    return (
        <div>
            <Layout>
                <Layout.Section>
                    {showBanner === true &&
                        <Banner title="Welcome John Doe!" status="info" onDismiss={() => setShowBanner({showBanner: false})}>
                            <p>You can change the settings of app here.</p>
                        </Banner>
                    }
                </Layout.Section>
                <Layout.AnnotatedSection
                    title="Store details"
                    description="Shopify and your customers will use this information to contact you."
                >
                    <Card sectioned>
                        <Form onSubmit={handleSubmit}>
                            <FormLayout>
                                <TextField label="Store name" value={storeName} onChange={handleStoreNameChange} />
                                <TextField type="email" label="Account email" value={email} onChange={handleEmailChange} />
                                <div className="submit">
                                    <Button submit={true} primary>Submit</Button>
                                </div>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
            <Layout>
                <ProductTable></ProductTable>
            </Layout>
        </div>
    )
}
