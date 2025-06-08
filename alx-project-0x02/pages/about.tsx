import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About = () => {
    return (
        <div>
            <Header/>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet natus dolorem sint! Quos a assumenda beatae non nisi quam autem, temporibus cum ipsum culpa nesciunt aliquid quas laborum ex?</h1>
            <div style={{ marginTop: '20px' }}>
                <Button size="small" shape="rounded-sm" label="Small Rounded">Small Rounded</Button>
                <Button size="medium" shape="rounded-md" label="Medium Rounded">Medium Rounded</Button>
                <Button size="large" shape="rounded-full" label="Large Full">Large Full</Button>
            </div>
        </div>
    );
};

export default About;