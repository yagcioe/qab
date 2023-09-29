export abstract class ValidateableComponent<TModel> {
    public abstract markAllInputsAsTouched(): void;

    public abstract isValid(): boolean;

    public abstract getModel(): TModel;

    public getModelIfValid(): TModel | null {
        if (this.isValid()) return this.getModel()
        return null;
    }
}