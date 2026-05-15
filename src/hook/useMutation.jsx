
export function useMutation(mutationFn) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutate = useCallback(async (...args) => {
        setLoading(true);
        setError(null);
        try{
            const result = await mutationFn(...args);
            return result;
        } catch (err){
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, [mutationFn]);

    return { mutate, loading, error };
}

function CriarProduto({ onSucesso }) {
    const {mutate, loading, error } = useMutation(
        (dados)  => api.post('/produtos', dados)
    );

    const handleSubmit = async (form) => {
        try {
            const novaTarefa = await mutate(form);
            onSucesso(novaTarefa);
        } catch { /*erro capturado no hook */}

    
    }
    return
}