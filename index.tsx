import SearchClient from '@/components/client/search.client';
import { Col, Divider, Row } from 'antd';
import styles from 'styles/client.module.scss';
import ScholarshipCard from '@/components/client/card/scholarship.card';

const ClientScholarshipPage = (props: any) => {
    return (
        <div className={styles["container"]} style={{ marginTop: 20 }}>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <SearchClient />
                </Col>
                <Divider />

                <Col span={24}>
                    <ScholarshipCard
                        showPagination={true}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ClientScholarshipPage;